import {Fish} from '../../encyclopedie/Types';
import {useQuery} from 'react-query';

async function FetchFishes(): Promise<Fish[]> {
  const response = await fetch('https://acnhapi.com/v1/fish', {method: 'GET'});
  return Object.values(await response.json());
}

export const useFetchFishes = () => {
  const {data, isLoading} = useQuery('fishList', FetchFishes);
  return {data, isLoading};
};
