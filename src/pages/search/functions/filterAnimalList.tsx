import {Animal} from '../../encyclopedie/Types';
import {FiltersTypes} from '../SearchPage';
import {filterAnimalListWithHour} from './filterAnimalListWithHour';
import {filterAnimalListWithMaxPrice} from './filterAnimalListWithMaxPrice';
import {filterAnimalListWithMinPrice} from './filterAnimalListWithMinPrice';
import {filterAnimalListWithMonth} from './filterAnimalListWithMonth';
import {filterAnimalListWithName} from './filterAnimalListWithName';

export const filterAnimalList = (
  animalListToFilter: Animal[],
  filtersArray: FiltersTypes,
) => {
  const listFilteredWithNameUserInput = filterAnimalListWithName(
    animalListToFilter,
    filtersArray.name,
  );

  const listFilteredWithUserMonthInput = filterAnimalListWithMonth(
    listFilteredWithNameUserInput,
    filtersArray.month,
  );

  const listFilteredWithUserHourInput = filterAnimalListWithHour(
    listFilteredWithUserMonthInput,
    filtersArray.hour,
  );

  const listFilteredWithUserMinPriceInput = filterAnimalListWithMinPrice(
    listFilteredWithUserHourInput,
    filtersArray.minPrice,
  );

  const listFilteredWithUserMaxPriceInput = filterAnimalListWithMaxPrice(
    listFilteredWithUserMinPriceInput,
    filtersArray.maxPrice,
  );

  return listFilteredWithUserMaxPriceInput;
};
