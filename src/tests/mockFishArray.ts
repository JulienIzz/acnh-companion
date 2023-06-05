import { Animal } from "../pages/encyclopedie/Types";

export const mockFishArray: Animal[] = [
  {
    id: 1,
    name: {
      'name-USen': 'PoissonPilote1',
      'name-EUfr': 'PoissonPilote1',
    },
    availability: {
      'month-northern': 'Avril à Septembre',
      'month-southern': 'Avril à Septembre',
      'month-array-northern': [4, 5, 6, 7, 8, 9],
      'month-array-southern': [4, 5, 6, 7, 8, 9],
      time: '9am - 4pm',
      'time-array': [9, 10, 11, 12, 13, 14, 15, 16],
      isAllDay: false,
      isAllYear: false,
      location: 'River',
      rarity: 'Common',
    },
    price: 2000,
    'price-cj': 2500,
    icon_uri: '',
    image_uri: '',
    shadow: 'Small',
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
    price: 10000,
    'price-cj': 12000,
    icon_uri: '',
    image_uri: '',
    shadow: 'Medium',
  },
];