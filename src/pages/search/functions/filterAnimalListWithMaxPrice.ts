import {Animal} from '../../encyclopedie/Types';

export const filterAnimalListWithMaxPrice = (
  animalListToFilter: Animal[],
  maximumPrice: number,
) => {
  return animalListToFilter.filter(animal => animal.price <= maximumPrice);
};
