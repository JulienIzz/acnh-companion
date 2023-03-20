import {Bug} from '../../encyclopedie/Types';
import {useQuery} from 'react-query';

async function FetchBugs(): Promise<Bug[]> {
  const response = await fetch('https://acnhapi.com/v1/bugs', {method: 'GET'});
  return Object.values(await response.json());
}

export const useFetchBugs = () => {
  const {data, isLoading} = useQuery('bugList', FetchBugs);
  return {data, isLoading};
};
