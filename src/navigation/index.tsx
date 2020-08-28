import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import {
  TransitionPresets,
  TransitionSpecs,
  HeaderStyleInterpolators,
} from 'react-navigation-stack';
import Home, { navigationOptions } from '../scenes/Home';
import Detail, { detailNavigationOptions } from '../scenes/Detail';

const stackNavigator = createSharedElementStackNavigator(
  {
    Home: {
      screen: Home,
      //navigationOptions: navigationOptions,
    },
    Detail: {
      screen: Detail,
      navigationOptions: detailNavigationOptions,
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      gestureEnabled: true,
      cardOverlayEnabled: true,
      headerTransparent: true,
      headerTitle: '',
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      ...TransitionPresets.FadeFromBottomAndroid,
    },
  },
);

const AppContainer = createAppContainer(stackNavigator);
export default AppContainer;
