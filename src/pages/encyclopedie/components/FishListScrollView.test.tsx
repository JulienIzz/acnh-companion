import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {Animal} from '../Types';
import {FishListScrollView} from './FishListScrollView';
import {RouteProp} from '@react-navigation/native';
import {mockFishArray} from '../../../tests/mockFishArray';

type mockTabStackParamList = {
  Fish: {fishList: Animal[]};
};

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
  const firstFishPriceOutput = screen.getByText('Prix : 2000');
  const firstFishRarityOutput = screen.getByText('Rareté : Common');
  const firstFishMonthsOutput = screen.getByText(
    'Disponibilité : Avril à Septembre',
  );
  const firstFishHoursOutput = screen.getByText('Horaire  : 9am - 4pm');
  const firstFishHocationOutput = screen.getByText('Localisation : River');
  const firstFishShadowOutput = screen.getByText('Ombre : Small');

  const secondFishNameOutput = screen.getByText('Nom : PoissonPilote2');
  const secondFishPriceOutput = screen.getByText('Prix : 10000');
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
