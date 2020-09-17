/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src';
import {name as appName} from './app.json';
import {headlessTask} from './src/core/backgroundJobs';

AppRegistry.registerComponent(appName, () => App);
