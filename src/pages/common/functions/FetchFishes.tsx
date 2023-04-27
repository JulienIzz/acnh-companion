import {Animal} from '../../encyclopedie/Types';
import {useQuery} from 'react-query';
import {AdaptAnimalData} from './AdaptAnimalData';

async function FetchFishes(): Promise<Animal[]> {
  const response = await fetch('https://acnhapi.com/v1/fish', {method: 'GET'});
  let data: Animal[] = Object.values(await response.json());
  data.forEach(animal => AdaptAnimalData(animal));
  return data;
}

export const useFetchFishes = () => {
  const {data, isLoading} = useQuery('fishList', FetchFishes);
  return {data, isLoading};
};
