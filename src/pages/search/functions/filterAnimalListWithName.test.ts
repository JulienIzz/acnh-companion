import {mockFishArray} from '../../../tests/mockFishArray';
import {Animal} from '../../encyclopedie/Types';
import {filterAnimalListWithName} from './filterAnimalListWithName';

describe('filterAnimalListWithName', () => {
  it('should filter a fish list correctly based on a name filter set with a part of the second fish name', () => {
    const fishListInput = [...mockFishArray];

    const mockFilters = {
      name: 'ote2',
      month: null,
      hour: null,
      minPrice: 0,
      maxPrice: 15000,
    };

    const expectedFishListOutput = [mockFishArray[1]];

    const fishListOutput = filterAnimalListWithName(
      fishListInput,
      mockFilters.name,
    );

    expect(fishListOutput).toEqual(expectedFishListOutput);
  });

  it('should filter a fish list correctly based on a name filter set with the entire second fish name', () => {
    const fishListInput = [...mockFishArray];

    const mockFilters = {
      name: 'PoissonPilote2',
      month: null,
      hour: null,
      minPrice: 0,
      maxPrice: 15000,
    };

    const expectedFishListOutput = [mockFishArray[1]];

    const fishListOutput = filterAnimalListWithName(
      fishListInput,
      mockFilters.name,
    );

    expect(fishListOutput).toEqual(expectedFishListOutput);
  });

  it('should empty a fish list correctly based on a name filter set with a name not corresponding to any fish', () => {
    const fishListInput = [...mockFishArray];

    const mockFilters = {
      name: 'Example',
      month: null,
      hour: null,
      minPrice: 0,
      maxPrice: 15000,
    };

    const expectedFishListOutput: Animal[] = [];

    const fishListOutput = filterAnimalListWithName(
      fishListInput,
      mockFilters.name,
    );

    expect(fishListOutput).toEqual(expectedFishListOutput);
  });

  it('should not filter a fish list based on a name filter set with a name corresponding to all fish', () => {
    const fishListInput = [...mockFishArray];

    const mockFilters = {
      name: 'Poisson',
      month: null,
      hour: null,
      minPrice: 0,
      maxPrice: 15000,
    };

    const expectedFishListOutput = [...mockFishArray];

    const fishListOutput = filterAnimalListWithName(
      fishListInput,
      mockFilters.name,
    );

    expect(fishListOutput).toEqual(expectedFishListOutput);
  });
});
