import {Villager} from '../../villagers/VillagerType';
import {translatePersonality} from './translatePersonalities';
import {translateSpecies} from './translateSpecies';

export const adaptVillagerData = (villager: Villager) => {
  villager.gender = villager.gender === 'Male' ? 'Mâle' : 'Femelle';
  villager.personality = translatePersonality(villager.personality);
  villager.species = translateSpecies(villager.species);
};
