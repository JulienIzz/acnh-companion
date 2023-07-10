import React from 'react';
import {Header} from '../header/Header';
import {useFetchVillagers} from '../common/functions/fetchVillagers';
import {LoadingPage} from '../common/components/LoadingPage';
import {VillagerView} from './VillagerView';
import {FlashList} from '@shopify/flash-list';

const HEADER_VILLAGERS_TEXT = 'Villageois';
const HEADER_IMAGE_PATH = require('../header/img/header_background.jpg');

export type VillagersParams = undefined;

export const Villagers = () => {
  const {data: villagerList, isLoading: isVillagerLoading} =
    useFetchVillagers();

  if (isVillagerLoading) {
    return (
      <LoadingPage image={HEADER_IMAGE_PATH} text={HEADER_VILLAGERS_TEXT} />
    );
  }

  return (
    <>
      <Header
        headerImagePath={HEADER_IMAGE_PATH}
        headerText={HEADER_VILLAGERS_TEXT}
      />
      <FlashList
        horizontal={false}
        data={villagerList}
        estimatedItemSize={128}
        renderItem={villager => <VillagerView villager={villager.item} />}
      />
    </>
  );
};
