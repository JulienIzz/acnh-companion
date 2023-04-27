import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../pages/home/HomeScreen';
import {Encyclopedie} from '../pages/encyclopedie/Encyclopedie';
import type {RootStackParamList} from './Types';
import {TestPage} from '../pages/test/TestPage';
import {SearchPage} from '../pages/search/SearchPage';

import {QueryClientProvider, QueryClient} from 'react-query';

const Stack = createNativeStackNavigator<RootStackParamList>();

const queryClient = new QueryClient();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Encyclopedie" component={Encyclopedie} />
          <Stack.Screen name="Search" component={SearchPage} />
          <Stack.Screen name="Test" component={TestPage} />
        </Stack.Navigator>
      </QueryClientProvider>
    </NavigationContainer>
  );
};
