import {StyleSheet, View} from 'react-native';
import React from 'react';
import {HomeButton} from './components/HomeButton';
import {ButtonData} from './components/HomeButtonsData';

export const NUMBER_OF_COLUMNS = 3;
export const MAX_GRID_WIDTH = 500;
export const GRID_WIDTH_RATIO = 0.9;

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
        />
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  listWrapper: {
    alignSelf: 'center',
    marginTop: 40,
    width: `${GRID_WIDTH_RATIO * 100}%`,
    maxWidth: MAX_GRID_WIDTH,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
