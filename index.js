import 'react-native-gesture-handler'; // This has to be on the top to avoid crashing the app when going back to a previous screen

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
