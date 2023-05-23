import { Animal } from "../pages/encyclopedie/Types";

export const mockBugArray: Animal[] = [
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