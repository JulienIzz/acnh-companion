import {HomeButton} from './HomeButton';
import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {Dimensions, StyleSheet} from 'react-native';

jest.mock('@react-navigation/native');

const MOCK_BUTTON_LABEL = 'Bouton numéro 1';
const MOCK_BUTTON_PATH = require('../img/bugs.png');
const MOCK_BUTTON_TARGET = 'Test';

const MOCK_NUMBER_OF_COLUMNS = 3;
const MOCK_MAX_GRID_WIDTH = 500;
const MOCK_GRID_WIDTH_RATIO = 0.9;

const BUTTON_TOTAL_HEIGHT = 160;
const BUTTON_TOTAL_WIDTH =
  Dimensions.get('window').width > MOCK_MAX_GRID_WIDTH
    ? (MOCK_MAX_GRID_WIDTH * MOCK_GRID_WIDTH_RATIO) / MOCK_NUMBER_OF_COLUMNS
    : (MOCK_GRID_WIDTH_RATIO * Dimensions.get('window').width) /
      MOCK_NUMBER_OF_COLUMNS;

const mockStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: BUTTON_TOTAL_HEIGHT,
    width: BUTTON_TOTAL_WIDTH,
  },
});

test('icon grid with pressable buttons', async () => {
  render(
    <HomeButton
      label={MOCK_BUTTON_LABEL}
      imagePath={MOCK_BUTTON_PATH}
      navigationTarget={MOCK_BUTTON_TARGET}
      containerStyle={mockStyles.container}
    />,
  );

  const ButtonLabel = screen.getByText('Bouton numéro 1');

  expect(ButtonLabel).toBeTruthy();
  expect(screen.toJSON()).toMatchSnapshot();
});
