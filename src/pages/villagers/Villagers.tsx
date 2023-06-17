import {View} from 'react-native';
import React from 'react';
import {Header} from '../header/Header';
import {useFetchVillagers} from '../common/functions/fetchVillagers';
import {LoadingPage} from '../common/components/LoadingPage';

const HEADER_VILLAGERS_TEXT = 'Villageois';
const HEADER_IMAGE_PATH = require('../header/img/header_background.jpg');

export const Villagers = () => {
  const {data: villagerList, isLoading: isVillagerLoading} =
    useFetchVillagers();

  if (isVillagerLoading) {
    return (
      <LoadingPage image={HEADER_IMAGE_PATH} text={HEADER_VILLAGERS_TEXT} />
    );
  }
  return (
    <View>
      <Header
        headerImagePath={HEADER_IMAGE_PATH}
        headerText={HEADER_VILLAGERS_TEXT}
      />
    </View>
  );
};
