import {HomeButton} from './HomeButton';
import React from 'react';
import {render, screen} from '@testing-library/react-native';

jest.mock('@react-navigation/native');

const MOCK_BUTTON_LABEL = 'Bouton numéro 1';
const MOCK_BUTTON_PATH = require('../img/bugs.png');
const MOCK_BUTTON_TARGET = 'Test';

test('icon grid with pressable buttons', async () => {
  render(
    <HomeButton
      label={MOCK_BUTTON_LABEL}
      imagePath={MOCK_BUTTON_PATH}
      navigationTarget={MOCK_BUTTON_TARGET}
    />,
  );

  const ButtonLabel = screen.getByText('Bouton numéro 1');

  expect(ButtonLabel).toBeTruthy();
  expect(screen.toJSON()).toMatchSnapshot();
});
