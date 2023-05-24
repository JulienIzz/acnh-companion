import {mockBugArray} from '../../../tests/mockBugArray';
import {mockFishArray} from '../../../tests/mockFishArray';
import {Animal} from '../../encyclopedie/Types';
import {filterAnimalListWithHour} from './filterAnimalListWithHour';

describe('filterAnimalListWithHour', () => {
  it('should filter a fish list correctly based on an hour filter set to midnight', () => {
    const fishListInput = [...mockFishArray];

    const mockFilters = {
      name: '',
      month: null,
      hour: 0,
      minPrice: 0,
      maxPrice: 15000,
    };

    const expectedFishListOutput = [mockFishArray[1]];

    const fishListOutput = filterAnimalListWithHour(
      fishListInput,
      mockFilters.hour,
    );

    expect(fishListOutput).toEqual(expectedFishListOutput);
  });

  it('should filter a fish list correctly based on an hour filter set to 22h', () => {
    const fishListInput = [...mockFishArray];

    const mockFilters = {
      name: '',
      month: null,
      hour: 22,
      minPrice: 0,
      maxPrice: 15000,
    };

    const expectedFishListOutput = [mockFishArray[1]];

    const fishListOutput = filterAnimalListWithHour(
      fishListInput,
      mockFilters.hour,
    );

    expect(fishListOutput).toEqual(expectedFishListOutput);
  });

  it('should not filter the fish list on an hour filter which is included in both fish', () => {
    const fishListInput = [...mockFishArray];

    const mockFilters = {
      name: '',
      month: null,
      hour: 12,
      minPrice: 0,
      maxPrice: 15000,
    };

    const expectedFishListOutput = [...mockFishArray];

    const fishListOutput = filterAnimalListWithHour(
      fishListInput,
      mockFilters.hour,
    );

    expect(fishListOutput).toEqual(expectedFishListOutput);
  });

  it('should filter a bug list correctly based on an hour filter set to midnight', () => {
    const bugListInput = [...mockBugArray];

    const mockFilters = {
      name: '',
      month: null,
      hour: 0,
      minPrice: 0,
      maxPrice: 15000,
    };

    const expectedBugListOutput = [mockBugArray[1]];

    const bugListOutput = filterAnimalListWithHour(
      bugListInput,
      mockFilters.hour,
    );

    expect(bugListOutput).toEqual(expectedBugListOutput);
  });

  it('should filter a bug list correctly based on an hour filter set to 22h', () => {
    const bugListInput = [...mockBugArray];

    const mockFilters = {
      name: '',
      month: null,
      hour: 22,
      minPrice: 0,
      maxPrice: 15000,
    };

    const expectedBugListOutput = [mockBugArray[1]];

    const bugListOutput = filterAnimalListWithHour(
      bugListInput,
      mockFilters.hour,
    );

    expect(bugListOutput).toEqual(expectedBugListOutput);
  });

  it('should not filter the bug list on an hour filter which is included in both fish', () => {
    const bugListInput = [...mockBugArray];

    const mockFilters = {
      name: '',
      month: null,
      hour: 12,
      minPrice: 0,
      maxPrice: 15000,
    };

    const expectedBugListOutput = [...mockBugArray];

    const bugListOutput = filterAnimalListWithHour(
      bugListInput,
      mockFilters.hour,
    );

    expect(bugListOutput).toEqual(expectedBugListOutput);
  });

  it('should return an empty list if no bug correspond to the hour filter', () => {
    const bugListInput: Animal[] = [
      {
        id: 1,
        name: {
          'name-USen': 'InsectePilote1',
          'name-EUfr': 'InsectePilote1',
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
          'month-northern': 'Avril à Septembre',
          'month-southern': 'Avril à Septembre',
          'month-array-northern': [4, 5, 6, 7, 8, 9],
          'month-array-southern': [4, 5, 6, 7, 8, 9],
          time: '9am - 4pm',
          'time-array': [9, 10, 11, 12, 13, 14, 15, 16],
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

    const mockFilters = {
      name: '',
      month: null,
      hour: 2,
      minPrice: 0,
      maxPrice: 15000,
    };

    const expectedBugListOutput: Animal[] = [];

    const bugListOutput = filterAnimalListWithHour(
      bugListInput,
      mockFilters.hour,
    );

    expect(bugListOutput).toEqual(expectedBugListOutput);
  });

  it('should return an empty list if no fish correspond to the hour filter', () => {
    const fishListInput: Animal[] = [
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
        'price-cj': 1200,
        icon_uri: '',
        image_uri: '',
        price: 900,
        shadow: 'Small',
      },
      {
        id: 2,
        name: {
          'name-USen': 'PoissonPilote2',
          'name-EUfr': 'PoissonPilote2',
        },
        availability: {
          'month-northern': 'Avril à Septembre',
          'month-southern': 'Avril à Septembre',
          'month-array-northern': [4, 5, 6, 7, 8, 9],
          'month-array-southern': [4, 5, 6, 7, 8, 9],
          time: '9am - 4pm',
          'time-array': [9, 10, 11, 12, 13, 14, 15, 16],
          isAllDay: true,
          isAllYear: true,
          location: 'Sea',
          rarity: 'Rare',
        },
        'price-cj': 18000,
        icon_uri: '',
        image_uri: '',
        price: 15000,
        shadow: 'Small',
      },
    ];

    const mockFilters = {
      name: '',
      month: null,
      hour: 2,
      minPrice: 0,
      maxPrice: 15000,
    };

    const expectedFishListOutput: Animal[] = [];

    const fishListOutput = filterAnimalListWithHour(
      fishListInput,
      mockFilters.hour,
    );

    expect(fishListOutput).toEqual(expectedFishListOutput);
  });
});
