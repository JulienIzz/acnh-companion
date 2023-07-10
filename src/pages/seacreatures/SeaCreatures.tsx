import React from 'react';
import {Header} from '../header/Header';
import {useFetchSeaCreatures} from '../common/functions/fetchSeaCreatures';
import {LoadingPage} from '../common/components/LoadingPage';

const HEADER_TEXT = 'Créatures Marines';
const HEADER_IMAGE = require('../header/img/header_background.jpg');

export type SeaCreaturesParams = undefined;

export const SeaCreatures = () => {
  const seaCreatureList = useFetchSeaCreatures();
  if (seaCreatureList.isLoading) {
    return <LoadingPage image={HEADER_IMAGE} text={HEADER_TEXT} />;
  }

  return <Header headerText={HEADER_TEXT} headerImagePath={HEADER_IMAGE} />;
};
