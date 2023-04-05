import {HomeScreen} from '../src/pages/home/HomeScreen';
import React from 'react';
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react-native';
import nock from 'nock';
import {QueryClient, QueryClientProvider} from 'react-query';

nock.disableNetConnect();

const crossFetch = require('cross-fetch');
global.fetch = crossFetch;
global.Response = crossFetch.Response;
global.Headers = crossFetch.Headers;
global.Request = crossFetch.Request;

//Setup files Jest, voir Enabler

const queryClient = new QueryClient();
jest.mock('@react-navigation/native');

test('homescreen with a header and multiple buttons', async () => {
  nock('https://acnhapi.com').get('/v1/bugs').reply(200, {});

  nock('https://acnhapi.com').get('/v1/fish').reply(200, {});

  render(
    <QueryClientProvider client={queryClient}>
      <HomeScreen />
    </QueryClientProvider>,
  );

  await waitForElementToBeRemoved(() => screen.getByTestId('Loader'));

  const HeaderOutput = screen.getByText('Companion');
  const FirstButton = screen.getByText('Encyclopédie');
  const SecondButton = screen.getByText('Test');

  expect(HeaderOutput).toBeTruthy();
  expect(FirstButton).toBeTruthy();
  expect(SecondButton).toBeTruthy();
  expect(screen.toJSON()).toMatchSnapshot();
});
