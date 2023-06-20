import {FiltersTypes} from '../SearchPage';

export function resetFilters(
  updateFilters: React.Dispatch<FiltersTypes>,
  sliderDynamicMaxValue: number,
) {
  return () => {
    updateFilters({
      name: '',
      month: null,
      hour: null,
      minPrice: 0,
      maxPrice: sliderDynamicMaxValue,
    });
  };
}
