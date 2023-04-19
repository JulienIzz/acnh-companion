import {Bug} from '../../encyclopedie/Types';
import {useQuery} from 'react-query';
import {AdaptAnimalData} from './AdaptAnimalData';

async function FetchBugs(): Promise<Bug[]> {
  const response = await fetch('https://acnhapi.com/v1/bugs', {method: 'GET'});
  let data: Bug[] = Object.values(await response.json());
  data.forEach(animal => AdaptAnimalData(animal));
  return data;
}

export const useFetchBugs = () => {
  const {data, isLoading} = useQuery('bugList', FetchBugs);
  return {data, isLoading};
};
