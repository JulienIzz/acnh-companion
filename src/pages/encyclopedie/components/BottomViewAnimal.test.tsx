import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {BottomViewAnimal} from './BottomViewAnimal';
import {mockFishArray} from '../../../tests/mockFishArray';

test('animal bottom view card with mock fish information', async () => {
  render(<BottomViewAnimal animal={mockFishArray[0]} />);

  const monthsOutput = screen.getByText('Disponibilité : Avril à Septembre');
  const hoursOutput = screen.getByText('Horaire  : 9am - 4pm');
  const locationOutput = screen.getByText('Localisation : River');
  const shadowOutput = screen.getByText('Ombre : Small');

  expect(monthsOutput).toBeTruthy();
  expect(hoursOutput).toBeTruthy();
  expect(locationOutput).toBeTruthy();
  expect(shadowOutput).toBeTruthy();

  expect(screen.toJSON()).toMatchSnapshot();
});
