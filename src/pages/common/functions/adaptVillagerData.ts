import {Villager} from '../../villagers/VillagerType';
import {translateBirthDay} from './translateBirthDay';
import {translatePersonality} from './translatePersonalities';
import {translateSpecies} from './translateSpecies';

export const adaptVillagerData = (villager: Villager) => {
  villager.gender = villager.gender === 'Male' ? 'Mâle' : 'Femelle';
  villager.personality = translatePersonality(villager.personality);
  villager.species = translateSpecies(villager.species);
  villager['birthday-string'] = translateBirthDay(villager['birthday-string']);
};
