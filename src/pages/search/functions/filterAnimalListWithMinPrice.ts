import {Animal} from '../../encyclopedie/Types';

export const filterAnimalListWithMinPrice = (
  animalListToFilter: Animal[],
  minimumPrice: number,
) => {
  return animalListToFilter.filter(animal => animal.price >= minimumPrice);
};
