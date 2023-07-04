import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {VillagerView} from './VillagerView';
import {mockVillagerArray} from '../../tests/mockVillagerArray';

test('Villager view card with mock information', async () => {
  render(<VillagerView villager={mockVillagerArray[0]} />);

  console.log(mockVillagerArray[0]);

  const nameOutput = screen.getByText('Nom : Villager1');
  const personalityOutput = screen.getByText('Personnalité : Smug');
  const birthdayOutput = screen.getByText('Anniversaire : January 1st');
  const sexOutput = screen.getByText('Sexe : Male');
  const specieOutput = screen.getByText('Espèce : Koala');

  expect(nameOutput).toBeTruthy();
  expect(personalityOutput).toBeTruthy();
  expect(birthdayOutput).toBeTruthy();
  expect(sexOutput).toBeTruthy();
  expect(specieOutput).toBeTruthy();

  expect(screen.toJSON()).toMatchSnapshot();
});
