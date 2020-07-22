import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeNavigator from './HomeNavigator';
import SearchNavigator from './SearchNavigator';

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeNavigator} />
    <Tab.Screen name="Search" component={SearchNavigator} />
  </Tab.Navigator>
);

export default TabNavigator;
