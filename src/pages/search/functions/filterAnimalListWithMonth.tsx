import {Animal} from '../../encyclopedie/Types';

export const filterAnimalListWithMonth = (
  animalListToFilter: Animal[],
  monthToFilter: number | null,
) => {
  if (monthToFilter === null) {
    return animalListToFilter;
  }

  return animalListToFilter.filter(animal =>
    animal.availability['month-array-northern'].includes(monthToFilter),
  );
};
