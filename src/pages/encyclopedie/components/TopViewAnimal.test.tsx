import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {TopViewAnimal} from './TopViewAnimal';
import {mockFishArray} from '../../../tests/mockFishArray';

test('animal top view card with mock fish information', async () => {
  render(<TopViewAnimal animal={mockFishArray[0]} />);

  const nameOutput = screen.getByText('Nom : PoissonPilote1');
  const priceOutput = screen.getByText('Prix : 2000');
  const rarityOutput = screen.getByText('Rareté : Common');

  expect(nameOutput).toBeTruthy();
  expect(priceOutput).toBeTruthy();
  expect(rarityOutput).toBeTruthy();

  expect(screen.toJSON()).toMatchSnapshot();
});
