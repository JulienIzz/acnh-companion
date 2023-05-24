import {mockFishArray} from '../../../tests/mockFishArray';
import {Animal} from '../../encyclopedie/Types';
import {filterAnimalListWithMinPrice} from './filterAnimalListWithMinPrice';

describe('filterAnimalListWithMinPrice', () => {
  it('should filter a fish list correctly based on a minimum price filter set to a value higher than the first fish and lower than the second', () => {
    const fishListInput = [...mockFishArray];

    const mockFilters = {
      name: '',
      month: null,
      hour: null,
      minPrice: 6000,
      maxPrice: 15000,
    };

    const expectedFishListOutput = [mockFishArray[1]];

    const fishListOutput = filterAnimalListWithMinPrice(
      fishListInput,
      mockFilters.minPrice,
    );

    expect(fishListOutput).toEqual(expectedFishListOutput);
  });

  it('should filter a fish list correctly based on a minimum price filter set to a value equal to the second fish and higher than the first', () => {
    const fishListInput = [...mockFishArray];

    const mockFilters = {
      name: '',
      month: null,
      hour: null,
      minPrice: 10000,
      maxPrice: 15000,
    };

    const expectedFishListOutput = [mockFishArray[1]];

    const fishListOutput = filterAnimalListWithMinPrice(
      fishListInput,
      mockFilters.minPrice,
    );

    expect(fishListOutput).toEqual(expectedFishListOutput);
  });

  it('should empty a fish list correctly based on a minimum price filter set to a value higher than the price of both fish', () => {
    const fishListInput = [...mockFishArray];

    const mockFilters = {
      name: '',
      month: null,
      hour: null,
      minPrice: 12000,
      maxPrice: 15000,
    };

    const expectedFishListOutput: Animal[] = [];

    const fishListOutput = filterAnimalListWithMinPrice(
      fishListInput,
      mockFilters.minPrice,
    );

    expect(fishListOutput).toEqual(expectedFishListOutput);
  });
});
