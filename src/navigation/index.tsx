import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { TransitionPresets } from 'react-navigation-stack';
import Home, { homeNavigationOptions } from '../scenes/Home';
import Detail, { detailNavigationOptions } from '../scenes/Detail';
import Favorites, { favoritesNavigationOptions } from '../scenes/Favorites';
import { CustomIcon } from '../components/atoms';
import { Spacing, Colors, Typography } from '../styles';

const HomeStack = createSharedElementStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: homeNavigationOptions,
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

const FavoriteStack = createSharedElementStackNavigator(
  {
    Favorite: {
      screen: Favorites,
      navigationOptions: favoritesNavigationOptions,
    },
    Detail: {
      screen: Detail,
      navigationOptions: detailNavigationOptions,
    },
  },
  {
    initialRouteName: 'Favorite',
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

const MainTabs = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ focused, tintColor }) => {
          return <CustomIcon name="home-variant" />;
        },
      },
    },
    Favorites: {
      screen: FavoriteStack,
      navigationOptions: {
        tabBarLabel: 'Favoritos',
        tabBarIcon: ({ focused, tintColor }) => {
          return <CustomIcon name="heart-outline" />;
        },
      },
    },
    More: {
      screen: HomeStack,
      navigationOptions: {
        tabBarLabel: 'Mais',
        tabBarIcon: ({ focused, tintColor }) => {
          return <CustomIcon name="dots-horizontal" />;
        },
      },
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      
    }),
    tabBarOptions: {
      activeTintColor: Colors.PRIMARY,
      inactiveTintColor: 'gray',
      labelStyle: { fontSize: 14 },
      style: {
        backgroundColor: '#000',
        //paddingTop: 20,
      },
    },
  },
);

//const AppContainer = createAppContainer(HomeStack);
const AppContainer = createAppContainer(MainTabs);
export default AppContainer;
