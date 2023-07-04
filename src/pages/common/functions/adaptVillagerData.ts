import {Villager} from '../../villagers/VillagerType';
import {translateSpecies} from './translateSpecies';

export const adaptVillagerData = (villager: Villager) => {
  villager.gender = villager.gender === 'Male' ? 'Mâle' : 'Femelle';
  villager.species = translateSpecies(villager.species);
};
