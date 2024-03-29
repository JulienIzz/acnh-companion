import {ImageSourcePropType} from 'react-native/types';
import {Routes} from '../../../navigation/Types';

export interface ButtonData {
  navigationTarget: Routes;
  imagePath: ImageSourcePropType;
  label: string;
}

export const HOME_SCREEN_BUTTONS_DATASET: ButtonData[] = [
  {
    label: 'Villageois',
    imagePath: require('../img/villagers.png'),
    navigationTarget: 'Villagers',
  },
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
    label: 'Aide',
    imagePath: require('../img/bugs.png'),
    navigationTarget: 'BugReporting',
  },
];
