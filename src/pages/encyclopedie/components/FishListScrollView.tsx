import type {Fish} from '../Types';
import {TabStackParamList} from '../Encyclopedie';
import {RouteProp} from '@react-navigation/native';
import {AnimalScrollView} from './AnimalScrollView';

type FishListRouteProp = RouteProp<TabStackParamList, 'Fish'>;

type FishProps = {
  route: FishListRouteProp;
};

export function FishListScrollView({route}: FishProps) {
  const fishList: Fish[] = route.params.fishList;
  return <AnimalScrollView type="fish" data={fishList} />;
}
