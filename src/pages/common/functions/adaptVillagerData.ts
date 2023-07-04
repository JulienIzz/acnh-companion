import {Villager} from '../../villagers/VillagerType';
import {translateSpecies} from './translateSpecies';

export const adaptVillagerData = (villager: Villager) => {
  villager.species = translateSpecies(villager.species);
};
