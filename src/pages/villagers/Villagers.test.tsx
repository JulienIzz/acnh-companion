import React from 'react';
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react-native';
import {mockVillagerArray} from '../../tests/mockVillagerArray';
import nock from 'nock';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Villagers} from './Villagers';

nock.disableNetConnect();

const crossFetch = require('cross-fetch');
global.fetch = crossFetch;
global.Response = crossFetch.Response;
global.Headers = crossFetch.Headers;
global.Request = crossFetch.Request;

const queryClient = new QueryClient();

test('Villager page with a flashlist of 2 villagers', async () => {
  nock('https://acnhapi.com')
    .get('/v1/villagers')
    .reply(200, mockVillagerArray);

  render(
    <QueryClientProvider client={queryClient}>
      <Villagers />
    </QueryClientProvider>,
  );

  await waitForElementToBeRemoved(() => screen.getByTestId('Loader'));

  const HeaderOutput = screen.getByText('Villageois');
  const nameOutput = screen.getByText('Nom : Villager1');
  const personalityOutput = screen.getByText('Personnalité : Suffisant');
  const birthdayOutput = screen.getByText('Anniversaire : 1 janvier');
  const sexOutput = screen.getByText('Sexe : Mâle');
  const specieOutput = screen.getByText('Espèce : Koala');

  expect(HeaderOutput).toBeTruthy();
  expect(nameOutput).toBeTruthy();
  expect(personalityOutput).toBeTruthy();
  expect(birthdayOutput).toBeTruthy();
  expect(sexOutput).toBeTruthy();
  expect(specieOutput).toBeTruthy();

  expect(screen.toJSON()).toMatchSnapshot();
});
