import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {Animal} from '../Types';
import {BugListScrollView} from './BugListScrollView';
import {RouteProp} from '@react-navigation/native';
import {mockBugArray} from '../../../tests/mockBugArray';

type mockTabStackParamList = {
  Bug: {bugList: Animal[]};
};

const mockRoute: RouteProp<mockTabStackParamList, 'Bug'> = {
  key: 'Bug',
  name: 'Bug',
  params: {
    bugList: mockBugArray,
  },
};

test('fish scroll view card with 2 mock bug information', async () => {
  render(<BugListScrollView route={mockRoute} />);

  const firstFishNameOutput = screen.getByText('Nom : InsectePilote1');
  const firstFishPriceOutput = screen.getByText('Prix : 900');
  const firstFishRarityOutput = screen.getByText('Rareté : Common');
  const firstFishMonthsOutput = screen.getByText(
    'Disponibilité : Avril à Septembre',
  );
  const firstFishHoursOutput = screen.getByText('Horaire  : 9am - 4pm');
  const firstFishHocationOutput = screen.getByText('Localisation : River');
  const secondFishNameOutput = screen.getByText('Nom : InsectePilote2');
  const secondFishPriceOutput = screen.getByText('Prix : 900');
  const secondFishRarityOutput = screen.getByText('Rareté : Common');
  const secondFishMonthsOutput = screen.getByText(
    'Disponibilité : Avril à Septembre',
  );
  const secondFishHoursOutput = screen.getByText('Horaire  : 9am - 4pm');
  const secondFishLocationOutput = screen.getByText('Localisation : River');

  expect(firstFishNameOutput).toBeTruthy();
  expect(firstFishPriceOutput).toBeTruthy();
  expect(firstFishRarityOutput).toBeTruthy();
  expect(firstFishMonthsOutput).toBeTruthy();
  expect(firstFishHoursOutput).toBeTruthy();
  expect(firstFishHocationOutput).toBeTruthy();
  expect(secondFishNameOutput).toBeTruthy();
  expect(secondFishPriceOutput).toBeTruthy();
  expect(secondFishRarityOutput).toBeTruthy();
  expect(secondFishMonthsOutput).toBeTruthy();
  expect(secondFishHoursOutput).toBeTruthy();
  expect(secondFishLocationOutput).toBeTruthy();

  expect(screen.toJSON()).toMatchSnapshot();
});
