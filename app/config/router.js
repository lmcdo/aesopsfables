import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Fables from '../screens/Fables';
import Settings from '../screens/Settings';
import Fable from '../screens/Fable';
import Me from '../screens/Me';

export const FeedStack = StackNavigator({
  Fables: {
    screen: Fables,
   // navigationOptions: {
   //  title: 'Fables',
   // },
  },
  Fable: {
    screen: Fable,
    //navigationOptions: {
    //  title: ({ state }) => `${state.params.title}`
    //},
  },
});

export const Tabs = TabNavigator({
  Fables: {
    screen: FeedStack,
    navigationOptions: {
      tabBarLabel: 'Fables',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
    },
  },
  Me: {
    screen: Me,
    navigationOptions: {
      tabBarLabel: 'Me',
      tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
    },
  },
});

export const SettingsStack = StackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings',
    },
  },
});

export const Root = StackNavigator({
  Tabs: {
    screen: Tabs,
  },
  Settings: {
    screen: SettingsStack,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
});
