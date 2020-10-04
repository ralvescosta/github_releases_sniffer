import AsyncStorage from '@react-native-community/async-storage';
import {ASYNC_STORAGE_KEYS} from '../../../core/defines/enums';
import {IGetAccountAndSnifferRepository} from '../../application/protocols/iget.account.and.sniffer.repository';
import {IRemoveSnifferRepository} from '../../application/protocols/iremove.sniffer.repository';
import {SniffedGithubRepositoryEntity} from '../../bussiness/entities/sniffed.github.repository.entity';

export class LocalDatabaseRepository implements IGetAccountAndSnifferRepository, IRemoveSnifferRepository {
  private readonly _accountAsyncKey = ASYNC_STORAGE_KEYS.ACCOUNT;
  private readonly _snifferAsyncKey = ASYNC_STORAGE_KEYS.SNIFFED;

  /**
   * singleton
   */
  private static _instance: LocalDatabaseRepository;
  private constructor() {}
  static getInstance(): LocalDatabaseRepository {
    if (!LocalDatabaseRepository._instance) {
      LocalDatabaseRepository._instance = new LocalDatabaseRepository();
    }
    return LocalDatabaseRepository._instance;
  }

  public async getUserAccountAndSniffer(): Promise<any> {
    const userAsString = await AsyncStorage.getItem(this._accountAsyncKey);
    let user;
    if (userAsString) {
      user = JSON.parse(userAsString);
    }

    const snifferAsString = await AsyncStorage.getItem(this._snifferAsyncKey);

    let sniffer: SniffedGithubRepositoryEntity[] = [];
    if (snifferAsString) {
      sniffer = JSON.parse(snifferAsString) || [];
    }

    return {user, sniffer};
  }

  public async removeSniffer(repositoryId: number): Promise<boolean> {
    const snifferAsString = await AsyncStorage.getItem(this._snifferAsyncKey);
    let sniffer: SniffedGithubRepositoryEntity[] = [];
    if (snifferAsString) {
      sniffer = JSON.parse(snifferAsString);
    }
    const filter = sniffer.filter((item) => item.id !== repositoryId);
    await AsyncStorage.setItem(this._snifferAsyncKey, JSON.stringify(filter));
    return true;
  }
}
