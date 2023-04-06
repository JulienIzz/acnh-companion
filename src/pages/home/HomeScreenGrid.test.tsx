import {HomeScreenGrid} from './HomeScreenGrid';
import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {ButtonData} from './components/HomeButtonsData';

jest.mock('@react-navigation/native');

const MOCK_BUTTONS_DATASET: ButtonData[] = [
  {
    label: 'Bouton numéro 1',
    imagePath: require('./img/bugs.png'),
    navigationTarget: 'Test',
  },
  {
    label: 'Bouton numéro 2',
    imagePath: require('./img/bugs.png'),
    navigationTarget: 'Test',
  },
];

test('icon grid with pressable buttons', async () => {
  render(<HomeScreenGrid buttons={MOCK_BUTTONS_DATASET} />);

  const FirstButtonLabel = screen.getByText('Bouton numéro 1');
  const SecondButtonLabel = screen.getByText('Bouton numéro 2');

  expect(FirstButtonLabel).toBeTruthy();
  expect(SecondButtonLabel).toBeTruthy();
  expect(screen.toJSON()).toMatchSnapshot();
});
