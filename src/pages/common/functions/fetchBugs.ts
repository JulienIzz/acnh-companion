import {Animal} from '../../encyclopedie/Types';
import {useQuery} from 'react-query';
import {adaptAnimalData} from './adaptAnimalData';

async function fetchBugs(): Promise<Animal[]> {
  const response = await fetch('https://acnhapi.com/v1/bugs', {method: 'GET'});
  let data: Animal[] = Object.values(await response.json());
  data.forEach(animal => adaptAnimalData(animal));
  return data;
}

export const useFetchBugs = () => {
  const {data, isLoading} = useQuery('bugList', fetchBugs);
  return {data, isLoading};
};
