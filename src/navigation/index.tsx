import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import {
  TransitionPresets,
  TransitionSpecs,
  HeaderStyleInterpolators,
} from 'react-navigation-stack';
import Home, { navigationOptions } from '../scenes/Home';

const stackNavigator = createSharedElementStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: navigationOptions,
    },
  },
  {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
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
      //...TransitionPresets.FadeFromBottomAndroid,
    },
  },
);

const AppContainer = createAppContainer(stackNavigator);
export default AppContainer;
