/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Counter from './src/containers/Counter/Counter';
import List from './src/containers/List/List';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
