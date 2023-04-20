import {StyleSheet, View, Dimensions} from 'react-native';
import React from 'react';
import {HomeButton, ButtonData} from './components/HomeButton';

export const NUMBER_OF_COLUMNS = 3;
export const MAX_GRID_WIDTH = 500;
export const GRID_WIDTH_RATIO = 0.9;

const BUTTON_CONTAINER_TOTAL_HEIGHT = 160;
const BUTTON_CONTAINER_TOTAL_WIDTH =
  Dimensions.get('window').width > MAX_GRID_WIDTH
    ? (MAX_GRID_WIDTH * GRID_WIDTH_RATIO) / NUMBER_OF_COLUMNS
    : (GRID_WIDTH_RATIO * Dimensions.get('window').width) / NUMBER_OF_COLUMNS;

interface Props {
  buttons: ButtonData[];
}

export const HomeScreenGrid = ({buttons}: Props) => {
  return (
    <View style={styles.listWrapper}>
      {buttons.map(button => (
        <HomeButton
          key={button.label}
          label={button.label}
          imagePath={button.imagePath}
          navigationTarget={button.navigationTarget}
          containerStyle={styles.buttonContainer}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    height: BUTTON_CONTAINER_TOTAL_HEIGHT,
    width: BUTTON_CONTAINER_TOTAL_WIDTH,
  },
  listWrapper: {
    alignSelf: 'center',
    marginTop: 40,
    width: `${GRID_WIDTH_RATIO * 100}%`,
    maxWidth: MAX_GRID_WIDTH,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
