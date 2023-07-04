import {Villager} from '../../villagers/VillagerType';
import {useQuery} from 'react-query';
import {adaptVillagerData} from './adaptVillagerData';

async function fetchVillagers(): Promise<Villager[]> {
  const response = await fetch('https://acnhapi.com/v1/villagers', {
    method: 'GET',
  });
  const data: Villager[] = Object.values(await response.json());
  data.forEach(villager => adaptVillagerData(villager));
  data.unshift(Lixy);
  return data;
}

export const useFetchVillagers = () => {
  const {data, isLoading} = useQuery('villagerList', fetchVillagers);
  return {data, isLoading};
};

const Lixy: Villager = {
  id: 0,
  name: {
    'name-USen': 'Lixy',
    'name-EUfr': 'Lixy',
  },
  personality: 'Être de colère',
  'birthday-string': 'August 23th',
  birthday: '8/23',
  species: 'Cat',
  gender: 'Female',
  'catch-phrase': 'kitty cat',
  icon_uri: 'https://acnhapi.com/v1/icons/villagers/46',
  image_uri: 'https://acnhapi.com/v1/images/villagers/46',
};
