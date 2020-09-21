/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src';
import {name as appName} from './app.json';
import {checkRepositoriesReleases} from './src/core/backgroundTask/checkRepositoriesReleaseTask';

AppRegistry.registerHeadlessTask('GithubSniffer', () => checkRepositoriesReleases);
AppRegistry.registerComponent(appName, () => App);
