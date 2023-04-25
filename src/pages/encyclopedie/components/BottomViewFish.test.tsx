import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {BottomViewFish} from './BottomViewFish';
import {Fish} from '../Types';

const mockFishArray: Fish[] = [
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

test('animal bottom view card with mock fish information', async () => {
  render(
    <BottomViewFish
      months={mockFishArray[0].availability['month-northern']}
      hours={mockFishArray[0].availability.time}
      location={mockFishArray[0].availability.location}
      shadow={mockFishArray[0].shadow}
    />,
  );

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
