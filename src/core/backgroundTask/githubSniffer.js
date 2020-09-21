import {NativeModules} from 'react-native';

const {GithubSniffer} = NativeModules;

/**
 * @typedef GithubSnifferProps
 * @type {object}
 * @property {Function} startService
 * @property {Function} stopService
 *
 */

/** @type {GithubSnifferProps} */
export {GithubSniffer};
