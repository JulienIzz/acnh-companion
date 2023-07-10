import {BugReportParams} from '../pages/bugreport/BugReporting';
import {EncyclopedieParams} from '../pages/encyclopedie/Encyclopedie';
import {HomeParams} from '../pages/home/HomeScreen';
import {SearchParams} from '../pages/search/SearchPage';
import {VillagersParams} from '../pages/villagers/Villagers';

export type RootStackParamList = {
  Home: HomeParams;
  Encyclopedie: EncyclopedieParams;
  Search: SearchParams;
  BugReporting: BugReportParams;
  Villagers: VillagersParams;
};

export type Routes = keyof RootStackParamList;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
