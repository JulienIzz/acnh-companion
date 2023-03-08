import {Bugs} from '../../encyclopedie/Types';
import {useQuery} from 'react-query';

const FetchBugs = () =>
  fetch('https://acnhapi.com/v1/bugs', {method: 'GET'})
    .then((response: Response) => response.json())
    .then((responseJSON: Bugs) => Object.values(responseJSON));

export const useFetchBugs = () => {
  const {data, isLoading} = useQuery('bugList', FetchBugs);
  return {data, isLoading};
};
