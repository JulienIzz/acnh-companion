import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {Animal} from '../Types';
import {FishListScrollView} from './FishListScrollView';
import {RouteProp} from '@react-navigation/native';

type mockTabStackParamList = {
  Fish: {fishList: Animal[]};
};

const mockFishArray: Animal[] = [
  {
    id: 1,
    name: {
      'name-USen': 'PoissonPilote1',
      'name-EUfr': 'PoissonPilote1',
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
    shadow: 'Small',
    price: 900,
  },
  {
    id: 2,
    name: {
      'name-USen': 'PoissonPilote2',
      'name-EUfr': 'PoissonPilote2',
    },
    availability: {
      'month-northern': "Toute l'année",
      'month-southern': "Toute l'année",
      'month-array-northern': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      'month-array-southern': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      time: 'Toute la journée',
      'time-array': [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23,
      ],
      isAllDay: true,
      isAllYear: true,
      location: 'Sea',
      rarity: 'Rare',
    },
    'price-cj': 18000,
    icon_uri: '',
    image_uri: '',
    shadow: 'Medium',
    price: 15000,
  },
];

const mockRoute: RouteProp<mockTabStackParamList, 'Fish'> = {
  key: 'Fish',
  name: 'Fish',
  params: {
    fishList: mockFishArray,
  },
};

test('fish scroll view card with 2 mock fish information', async () => {
  render(<FishListScrollView route={mockRoute} />);

  const firstFishNameOutput = screen.getByText('Nom : PoissonPilote1');
  const firstFishPriceOutput = screen.getByText('Prix : 900');
  const firstFishRarityOutput = screen.getByText('Rareté : Common');
  const firstFishMonthsOutput = screen.getByText(
    'Disponibilité : Avril à Septembre',
  );
  const firstFishHoursOutput = screen.getByText('Horaire  : 9am - 4pm');
  const firstFishHocationOutput = screen.getByText('Localisation : River');
  const firstFishShadowOutput = screen.getByText('Ombre : Small');

  const secondFishNameOutput = screen.getByText('Nom : PoissonPilote2');
  const secondFishPriceOutput = screen.getByText('Prix : 15000');
  const secondFishRarityOutput = screen.getByText('Rareté : Rare');
  const secondFishMonthsOutput = screen.getByText(
    "Disponibilité : Toute l'année",
  );
  const secondFishHoursOutput = screen.getByText('Horaire  : Toute la journée');
  const secondFishLocationOutput = screen.getByText('Localisation : Sea');
  const secondFishShadowOutput = screen.getByText('Ombre : Medium');

  expect(firstFishNameOutput).toBeTruthy();
  expect(firstFishPriceOutput).toBeTruthy();
  expect(firstFishRarityOutput).toBeTruthy();
  expect(firstFishMonthsOutput).toBeTruthy();
  expect(firstFishHoursOutput).toBeTruthy();
  expect(firstFishHocationOutput).toBeTruthy();
  expect(firstFishShadowOutput).toBeTruthy();
  expect(secondFishNameOutput).toBeTruthy();
  expect(secondFishPriceOutput).toBeTruthy();
  expect(secondFishRarityOutput).toBeTruthy();
  expect(secondFishMonthsOutput).toBeTruthy();
  expect(secondFishHoursOutput).toBeTruthy();
  expect(secondFishLocationOutput).toBeTruthy();
  expect(secondFishShadowOutput).toBeTruthy();

  expect(screen.toJSON()).toMatchSnapshot();
});
