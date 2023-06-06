import {FiltersTypes} from '../SearchPage';

export function resetFilters(
  setFilters: React.Dispatch<React.SetStateAction<FiltersTypes>>,
  sliderDynamicMaxValue: number,
) {
  return () => {
    setFilters({
      name: '',
      month: null,
      hour: null,
      minPrice: 0,
      maxPrice: sliderDynamicMaxValue,
    });
  };
}
