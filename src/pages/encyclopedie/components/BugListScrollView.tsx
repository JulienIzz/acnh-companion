import type {Bug} from '../Types';
import {TabStackParamList} from '../Encyclopedie';
import {RouteProp} from '@react-navigation/native';
import {AnimalScrollView} from './AnimalScrollView';

type BugListRouteProp = RouteProp<TabStackParamList, 'Bug'>;

type BugProps = {
  route: BugListRouteProp;
};

export function BugListScrollView({route}: BugProps) {
  const bugList: Bug[] = route.params.bugList;
  return <AnimalScrollView type="bug" data={bugList} />;
}
