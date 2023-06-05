import {mockFishArray} from '../../../tests/mockFishArray';
import {Animal} from '../../encyclopedie/Types';
import {filterAnimalListWithMaxPrice} from './filterAnimalListWithMaxPrice';

describe('filterAnimalListWithMaxPrice', () => {
  it('should filter a fish list correctly based on a maximum price filter set to a value lower than the second fish and higher than the first', () => {
    const fishListInput = [...mockFishArray];

    const mockFilters = {
      name: '',
      month: null,
      hour: null,
      minPrice: 0,
      maxPrice: 6000,
    };

    const expectedFishListOutput = [mockFishArray[0]];

    const fishListOutput = filterAnimalListWithMaxPrice(
      fishListInput,
      mockFilters.maxPrice,
    );

    expect(fishListOutput).toEqual(expectedFishListOutput);
  });

  it('should filter a fish list correctly based on a maximum price filter set to a value equal to the first fish and lower than the second', () => {
    const fishListInput = [...mockFishArray];

    const mockFilters = {
      name: '',
      month: null,
      hour: null,
      minPrice: 0,
      maxPrice: 2000,
    };

    const expectedFishListOutput = [mockFishArray[0]];

    const fishListOutput = filterAnimalListWithMaxPrice(
      fishListInput,
      mockFilters.maxPrice,
    );

    expect(fishListOutput).toEqual(expectedFishListOutput);
  });

  it('should empty a fish list correctly based on a minimum price filter set to a value lower than the price of both fish', () => {
    const fishListInput = [...mockFishArray];

    const mockFilters = {
      name: '',
      month: null,
      hour: null,
      minPrice: 0,
      maxPrice: 1000,
    };

    const expectedFishListOutput: Animal[] = [];

    const fishListOutput = filterAnimalListWithMaxPrice(
      fishListInput,
      mockFilters.maxPrice,
    );

    expect(fishListOutput).toEqual(expectedFishListOutput);
  });
});
