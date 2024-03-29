import {Animal} from '../../encyclopedie/Types';
import {adaptAnimalData} from './adaptAnimalData';

describe('AdaptAnimalData', () => {
  it('should update the availability fields for non-empty input', () => {
    const input: Animal = {
      id: 1,
      name: {
        'name-USen': 'PoissonPilote',
        'name-EUfr': 'PoissonPilote',
      },
      availability: {
        'month-northern': '4-9',
        'month-southern': '4-9',
        'month-array-northern': [1, 2],
        'month-array-southern': [1, 2],
        time: '9am - 4pm',
        isAllDay: false,
        isAllYear: false,
        location: 'River',
        rarity: 'Common',
        'time-array': [9, 10, 11, 12, 13, 14, 15, 16],
      },
      'price-cj': 1200,
      icon_uri: '',
      image_uri: '',
      shadow: 'Small',
      price: 900,
    };

    const expectedResult = {
      availability: {
        'month-northern': 'Avril à Septembre',
        time: '09h - 16h',
      },
    };

    adaptAnimalData(input);

    expect(input.availability['month-northern']).toEqual(
      expectedResult.availability['month-northern'],
    );
    expect(input.availability.time).toEqual(expectedResult.availability.time);
  });

  it('should handle empty input for both availability fields', () => {
    const input: Animal = {
      id: 1,
      name: {
        'name-USen': 'PoissonPilote',
        'name-EUfr': 'PoissonPilote',
      },
      availability: {
        'month-northern': '',
        'month-southern': '',
        'month-array-northern': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        'month-array-southern': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        time: '',
        isAllDay: true,
        isAllYear: true,
        location: 'River',
        rarity: 'Common',
        'time-array': [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24,
        ],
      },
      'price-cj': 1200,
      icon_uri: '',
      image_uri: '',
      shadow: 'Small',
      price: 900,
    };

    const expectedResult = {
      availability: {
        'month-northern': "Toute l'année",
        time: 'Toute la journée',
      },
    };

    adaptAnimalData(input);

    expect(input.availability['month-northern']).toEqual(
      expectedResult.availability['month-northern'],
    );
    expect(input.availability.time).toEqual(expectedResult.availability.time);
  });
});
