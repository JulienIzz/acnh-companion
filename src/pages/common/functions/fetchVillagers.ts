import {Villager} from '../../villagers/VillagerType';
import {useQuery} from 'react-query';

async function fetchVillagers(): Promise<Villager[]> {
  const response = await fetch('https://acnhapi.com/v1/villagers', {
    method: 'GET',
  });
  const data: Villager[] = Object.values(await response.json());
  return data;
}

export const useFetchVillagers = () => {
  const {data, isLoading} = useQuery('villagerList', fetchVillagers);
  return {data, isLoading};
};
