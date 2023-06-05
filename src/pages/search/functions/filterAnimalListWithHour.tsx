import {Animal} from '../../encyclopedie/Types';

export const filterAnimalListWithHour = (
  animalListToFilter: Animal[],
  hourToFilter: number | null,
) => {
  if (hourToFilter === null) {
    return animalListToFilter;
  }
  return animalListToFilter.filter(animal =>
    animal.availability['time-array'].includes(hourToFilter),
  );
};
