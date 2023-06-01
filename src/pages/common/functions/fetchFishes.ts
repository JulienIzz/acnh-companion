import {Animal} from '../../encyclopedie/Types';
import {useQuery} from 'react-query';
import {adaptAnimalData} from './adaptAnimalData';

async function fetchFishes(): Promise<Animal[]> {
  const response = await fetch('https://acnhapi.com/v1/fish', {method: 'GET'});
  let data: Animal[] = Object.values(await response.json());
  data.forEach(animal => adaptAnimalData(animal));
  return data;
}

export const useFetchFishes = () => {
  const {data, isLoading} = useQuery('fishList', fetchFishes);
  return {data, isLoading};
};
