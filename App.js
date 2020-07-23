import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import { Provider as ApiProvider } from './src/stores/ApiContext';

const App = () => (
  <NavigationContainer>
    <ApiProvider>
      <StatusBar barStyle="dark-content" />
      <BottomTabNavigator />
    </ApiProvider>
  </NavigationContainer>
);

export default App;
