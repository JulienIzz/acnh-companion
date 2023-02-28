import {ButtonData} from './HomeButton';

export const HOME_SCREEN_BUTTONS_DATASET: ButtonData[] = [
  {
    label: 'Encyclopédie',
    imagePath: require('../img/encyclo_betes.png'),
    navigationTarget: 'Encyclopedie',
  },
  {
    label: 'Tracker',
    imagePath: require('../img/tracker.png'),
    navigationTarget: 'Tracker',
  },
  {
    label: 'Fossiles',
    imagePath: require('../img/encyclo_fossiles.png'),
    navigationTarget: 'Fossiles',
  },
  {
    label: 'Mon Village',
    imagePath: require('../img/my_village.png'),
    navigationTarget: 'MonVillage',
  },
];
