import React from 'react';
import {Text, View} from 'react-native';
import {LabelProps} from '@ptomasroos/react-native-multi-slider';
import {styles} from './SearchPage';

export const customLabelComponent = (value: LabelProps) => (
  <View style={styles.sliderLabels}>
    <Text style={styles.slideMinMaxPrice}>{value.oneMarkerValue}</Text>
    <Text style={styles.sliderPriceText}>PRIX</Text>
    <Text style={styles.slideMinMaxPrice}>{value.twoMarkerValue}</Text>
  </View>
);
