import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import BottomTabNavigator from './src/navigation/BottomTabNavigator';

const App = () => (
  <NavigationContainer>
    <StatusBar barStyle="dark-content" />
    <BottomTabNavigator />
  </NavigationContainer>
);

export default App;
