import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {TopViewAnimal} from './TopViewAnimal';
import {Fish} from '../Types';

const mockFishArray: Fish[] = [
  {
    id: 1,
    name: {
      'name-USen': 'PoissonPilote1',
      'name-EUfr': 'PoissonPilote1',
    },
    availability: {
      'month-northern': '4 - 9',
      'month-southern': '4 - 9',
      'month-array-northern': [1, 2],
      'month-array-southern': [1, 2],
      time: '9am - 4pm',
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
];

test('animal top view card with mock fish information', async () => {
  render(
    <TopViewAnimal
      animal={mockFishArray[0]}
    />,
  );

  const nameOutput = screen.getByText('Nom : PoissonPilote1');
  const priceOutput = screen.getByText('Prix : 900');
  const rarityOutput = screen.getByText('Rareté : Common');

  expect(nameOutput).toBeTruthy();
  expect(priceOutput).toBeTruthy();
  expect(rarityOutput).toBeTruthy();

  expect(screen.toJSON()).toMatchSnapshot();
});
