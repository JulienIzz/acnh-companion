import {Fishes} from '../../encyclopedie/Types';
import {useQuery} from 'react-query';

const FetchFishes = () =>
  fetch('https://acnhapi.com/v1/fish', {method: 'GET'})
    .then((response: Response) => response.json())
    .then((responseJSON: Fishes) => Object.values(responseJSON));

export const useFetchFishes = () => {
  const {data, isLoading} = useQuery('fishList', FetchFishes);
  return {data, isLoading};
};
