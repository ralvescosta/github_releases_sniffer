/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src';
import {name as appName} from './app.json';

const MyHeadlessTask = async () => {
  console.log('Receiving Sniffer!');
};

AppRegistry.registerHeadlessTask('GithubSniffer', () => MyHeadlessTask);
AppRegistry.registerComponent(appName, () => App);
