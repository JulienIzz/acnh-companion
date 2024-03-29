import React from 'react';
import {Image, ImageSourcePropType, StyleSheet} from 'react-native';
import {Header} from '../header/Header';
import type {Animal} from './Types';
import {FishListScrollView} from './components/FishListScrollView';
import {BugListScrollView} from './components/BugListScrollView';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useFetchFishes} from '../common/functions/fetchFishes';
import {useFetchBugs} from '../common/functions/fetchBugs';
import {LoadingPage} from '../common/components/LoadingPage';

const HEADER_ENCYCLOPEDIA_TEXT = 'Encyclopédie';
const HEADER_IMAGE_PATH = require('../header/img/header_background.jpg');

const FISH_ICON_IMAGE_PATH = require('./img/fish.png');
const BUG_ICON_IMAGE_PATH = require('./img/bug.png');

const Tab = createMaterialTopTabNavigator<TabStackParamList>();

export type TabStackParamList = {
  Fish: {fishList: Animal[]};
  Bug: {bugList: Animal[]};
};

export const Encyclopedie = () => {
  const {data: fishList, isLoading: isFishLoading} = useFetchFishes();
  const {data: bugList, isLoading: isBugLoading} = useFetchBugs();

  if (!isFishLoading && !isBugLoading) {
    return (
      <>
        <Header
          headerImagePath={HEADER_IMAGE_PATH}
          headerText={HEADER_ENCYCLOPEDIA_TEXT}
        />
        <Tab.Navigator
          backBehavior="none"
          screenOptions={tabNavigatorScreenOptions}>
          <Tab.Screen
            name="Fish"
            component={FishListScrollView}
            initialParams={{fishList}}
            options={iconOptions(FISH_ICON_IMAGE_PATH)}
          />
          <Tab.Screen
            name="Bug"
            component={BugListScrollView}
            initialParams={{bugList}}
            options={iconOptions(BUG_ICON_IMAGE_PATH)}
          />
        </Tab.Navigator>
      </>
    );
  } else {
    return (
      <LoadingPage image={HEADER_IMAGE_PATH} text={HEADER_ENCYCLOPEDIA_TEXT} />
    );
  }
};

const tabNavigatorScreenOptions = {
  tabBarAndroidRipple: {
    radius: 0,
  },
  tabBarShowLabel: false,
  tabBarStyle: {
    backgroundColor: '#FAEDCD',
    shadowColor: 'transparent',
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: '#78430A',
  },
  tabBarIndicatorStyle: {
    height: '100%',
    backgroundColor: '#D4A373',
  },
};

const iconOptions = (icon: ImageSourcePropType) => {
  return {
    tabBarIcon: ({focused}: {focused: Boolean}) => {
      if (focused) {
        return <Image source={icon} style={styles.iconFullOpacity} />;
      } else {
        return <Image source={icon} style={styles.iconLowOpacity} />;
      }
    },
  };
};

const styles = StyleSheet.create({
  iconFullOpacity: {
    flex: 1,
    width: '100%',
    resizeMode: 'contain',
  },
  iconLowOpacity: {
    flex: 1,
    width: '100%',
    resizeMode: 'contain',
    opacity: 0.2,
  },
});
