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
    label: 'Test',
    imagePath: require('../img/bugs.png'),
    navigationTarget: 'Test',
  },
];
