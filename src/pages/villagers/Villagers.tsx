import {View} from 'react-native';
import React from 'react';
import {Header} from '../header/Header';

const HEADER_VILLAGERS_TEXT = 'Villageois';
const HEADER_IMAGE_PATH = require('../header/img/header_background.jpg');

export const Villagers = () => {
  return (
    <View>
      <Header
        headerImagePath={HEADER_IMAGE_PATH}
        headerText={HEADER_VILLAGERS_TEXT}
      />
    </View>
  );
};
