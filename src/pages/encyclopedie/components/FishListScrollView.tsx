import type {Animal} from '../Types';
import {TabStackParamList} from '../Encyclopedie';
import {RouteProp} from '@react-navigation/native';
import {AnimalScrollView} from './AnimalScrollView';

type FishListRouteProp = RouteProp<TabStackParamList, 'Fish'>;

type FishProps = {
  route: FishListRouteProp;
};

export function FishListScrollView({route}: FishProps) {
  const fishList: Animal[] = route.params.fishList;
  return <AnimalScrollView type="fish" data={fishList} />;
}
