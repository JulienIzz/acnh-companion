import {useQuery} from 'react-query';
import {SeaCreature} from '../../seacreatures/Types';
import {adaptSeaCreatureData} from './adaptSeaCreaturesData';

async function fetchSeaCreatures(): Promise<SeaCreature[]> {
  const response = await fetch('https://acnhapi.com/v1/sea', {method: 'GET'});
  let data: SeaCreature[] = Object.values(await response.json());
  data.forEach(seaCreature => adaptSeaCreatureData(seaCreature));
  return data;
}

export const useFetchFishes = () => {
  const {data, isLoading} = useQuery('seaCreatureList', fetchSeaCreatures);
  return {data, isLoading};
};
