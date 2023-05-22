import {Animal} from '../../encyclopedie/Types';

export const filterAnimalListWithName = (
  animalListToFilter: Animal[],
  nameToFilter: string,
) => {
  return animalListToFilter.filter(animal =>
    animal.name['name-EUfr'].toLowerCase().includes(nameToFilter.toLowerCase()),
  );
};
