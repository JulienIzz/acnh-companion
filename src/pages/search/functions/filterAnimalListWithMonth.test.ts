import {mockBugArray} from '../../../tests/mockBugArray';
import {mockFishArray} from '../../../tests/mockFishArray';
import {Animal} from '../../encyclopedie/Types';
import {filterAnimalListWithMonth} from './filterAnimalListWithMonth';

describe('filterAnimalListWithMonth', () => {
  it('should filter a fish list correctly based on a month filter set to january', () => {
    const fishListInput = [...mockFishArray];

    const mockFilters = {
      name: '',
      month: 1,
      hour: null,
      minPrice: 0,
      maxPrice: 15000,
    };

    const expectedFishListOutput = [mockFishArray[1]];

    const fishListOutput = filterAnimalListWithMonth(
      fishListInput,
      mockFilters.month,
    );

    expect(fishListOutput).toEqual(expectedFishListOutput);
  });

  it('should filter a fish list correctly based on a month filter set to december', () => {
    const fishListInput = [...mockFishArray];

    const mockFilters = {
      name: '',
      month: 12,
      hour: null,
      minPrice: 0,
      maxPrice: 15000,
    };

    const expectedFishListOutput = [mockFishArray[1]];

    const fishListOutput = filterAnimalListWithMonth(
      fishListInput,
      mockFilters.month,
    );

    expect(fishListOutput).toEqual(expectedFishListOutput);
  });

  it('should not filter the fish list on a month filter which is included in both fish', () => {
    const fishListInput = [...mockFishArray];

    const mockFilters = {
      name: '',
      month: 6,
      hour: null,
      minPrice: 0,
      maxPrice: 15000,
    };

    const expectedFishListOutput = [...mockFishArray];

    const fishListOutput = filterAnimalListWithMonth(
      fishListInput,
      mockFilters.month,
    );

    expect(fishListOutput).toEqual(expectedFishListOutput);
  });

  it('should filter a bug list correctly based on a month filter set to january', () => {
    const bugListInput = [...mockBugArray];

    const mockFilters = {
      name: '',
      month: 1,
      hour: null,
      minPrice: 0,
      maxPrice: 15000,
    };

    const expectedBugListOutput = [mockBugArray[1]];

    const bugListOutput = filterAnimalListWithMonth(
      bugListInput,
      mockFilters.month,
    );

    expect(bugListOutput).toEqual(expectedBugListOutput);
  });

  it('should filter a bug list correctly based on a month filter set to december', () => {
    const bugListInput = [...mockBugArray];

    const mockFilters = {
      name: '',
      month: 12,
      hour: null,
      minPrice: 0,
      maxPrice: 15000,
    };

    const expectedBugListOutput = [mockBugArray[1]];

    const bugListOutput = filterAnimalListWithMonth(
      bugListInput,
      mockFilters.month,
    );

    expect(bugListOutput).toEqual(expectedBugListOutput);
  });

  it('should not filter the fish list on an hour filter which is included in both fish', () => {
    const bugListInput = [...mockBugArray];

    const mockFilters = {
      name: '',
      month: 6,
      hour: null,
      minPrice: 0,
      maxPrice: 15000,
    };

    const expectedBugListOutput = [...mockBugArray];

    const bugListOutput = filterAnimalListWithMonth(
      bugListInput,
      mockFilters.month,
    );

    expect(bugListOutput).toEqual(expectedBugListOutput);
  });

  it('should return an empty list if no bug correspond to the month filter', () => {
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
    ];

    const mockFilters = {
      name: '',
      month: 2,
      hour: null,
      minPrice: 0,
      maxPrice: 15000,
    };

    const expectedBugListOutput: Animal[] = [];

    const bugListOutput = filterAnimalListWithMonth(
      bugListInput,
      mockFilters.month,
    );

    expect(bugListOutput).toEqual(expectedBugListOutput);
  });

  it('should return an empty list if no fish correspond to the month filter', () => {
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
          'time-array': [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
            19, 20, 21, 22, 23,
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
        shadow: 'Small',
      },
    ];

    const mockFilters = {
      name: '',
      month: 2,
      hour: null,
      minPrice: 0,
      maxPrice: 15000,
    };

    const expectedFishListOutput: Animal[] = [];

    const fishListOutput = filterAnimalListWithMonth(
      fishListInput,
      mockFilters.month,
    );

    expect(fishListOutput).toEqual(expectedFishListOutput);
  });
});
