import React from 'react';
import {Header} from '../header/Header';
import {HOME_SCREEN_BUTTONS_DATASET} from './components/HomeButtonsData';
import {useFetchBugs} from '../common/functions/fetchBugs';
import {useFetchFishes} from '../common/functions/fetchFishes';
import {LoadingPage} from '../common/components/LoadingPage';
import {HomeScreenGrid} from './HomeScreenGrid';

const HEADER_HOME_TEXT = 'Companion';
const HEADER_IMAGE_PATH = require('../header/img/header_background.jpg');

export const HomeScreen = () => {
  const {isLoading: isFishLoading} = useFetchFishes();
  const {isLoading: isBugLoading} = useFetchBugs();

  if (!isFishLoading && !isBugLoading) {
    return (
      <>
        <Header
          headerImagePath={HEADER_IMAGE_PATH}
          headerText={HEADER_HOME_TEXT}
        />
        <HomeScreenGrid buttons={HOME_SCREEN_BUTTONS_DATASET} />
      </>
    );
  } else {
    return <LoadingPage image={HEADER_IMAGE_PATH} text={HEADER_HOME_TEXT} />;
  }
};
