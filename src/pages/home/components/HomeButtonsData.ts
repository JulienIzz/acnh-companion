import {ImageSourcePropType} from 'react-native/types';
import {Routes} from '../../../navigation/Types';

export interface ButtonData {
  navigationTarget: Routes;
  imagePath: ImageSourcePropType;
  label: string;
}

export const HOME_SCREEN_BUTTONS_DATASET: ButtonData[] = [
  {
    label: 'Encyclopédie',
    imagePath: require('../img/encyclo_betes.png'),
    navigationTarget: 'Encyclopedie',
  },
  {
    label: 'Recherche',
    imagePath: require('../img/tracker.png'),
    navigationTarget: 'Search',
  },
  {
    label: 'Report de bug',
    imagePath: require('../img/bugs.png'),
    navigationTarget: 'BugReporting',
  },
  {
    label: 'Villageois',
    imagePath: require('../img/villagers.png'),
    navigationTarget: 'Villagers',
  },
];
