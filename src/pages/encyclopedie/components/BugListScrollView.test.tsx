import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {Animal} from '../Types';
import {BugListScrollView} from './BugListScrollView';
import {RouteProp} from '@react-navigation/native';

type mockTabStackParamList = {
  Bug: {bugList: Animal[]};
};

const mockBugArray: Animal[] = [
  {
    id: 1,
    name: {
      'name-USen': 'InsectePilote1',
      'name-EUfr': 'InsectePilote1',
    },
    availability: {
      'month-northern': 'Avril à Septembre',
      'month-southern': 'Avril à Septembre',
      'month-array-northern': [1, 2],
      'month-array-southern': [1, 2],
      time: '9am - 4pm',
      'time-array': [9, 10, 11, 12, 13, 14, 15, 16],
      isAllDay: false,
      isAllYear: false,
      location: 'River',
      rarity: 'Common',
    },
    'price-cj': 1200,
    icon_uri: '',
    image_uri: '',
    price: 900,
  },
  {
    id: 2,
    name: {
      'name-USen': 'InsectePilote2',
      'name-EUfr': 'InsectePilote2',
    },
    availability: {
      'month-northern': "Tout l'année",
      'month-southern': "Tout l'année",
      'month-array-northern': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      'month-array-southern': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      'time-array': [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23,
      ],
      time: 'Tout la journée',
      isAllDay: true,
      isAllYear: true,
      location: 'Sea',
      rarity: 'Rare',
    },
    'price-cj': 18000,
    icon_uri: '',
    image_uri: '',
    price: 15000,
  },
];

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
