import {NativeModules} from 'react-native';
import {SnifferController} from './interfaces/sniffer.controller';
import {SnifferReleasesUsecase} from './application/usecases/sniffer.releases.usecase';
import {GithubGetLastReleaseRepository} from './infrastructure/github.get.last.release.repository';
import {LocalDatabaseRepository} from './infrastructure/local.database.repository';

/**
 * @typedef GithubSnifferProps
 * @type {object}
 * @property {Function} startService
 * @property {Function} stopService
 *
 */
/** @type {GithubSnifferProps} */
const {GithubSniffer} = NativeModules;

const githubGetLastReleaseRepository = new GithubGetLastReleaseRepository();
const localDatabaseRepository = new LocalDatabaseRepository();
const snifferReleasesUsecase = new SnifferReleasesUsecase(githubGetLastReleaseRepository, localDatabaseRepository);
const snifferController = new SnifferController(snifferReleasesUsecase);

export {GithubSniffer, snifferController};
