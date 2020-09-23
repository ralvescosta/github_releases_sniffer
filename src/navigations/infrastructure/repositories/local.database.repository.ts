import AsyncStorage from '@react-native-community/async-storage';
import {ASYNC_STORAGE_KEYS} from '../../../core/defines/enums';

import {IGetLocallyUserAccountRepository} from '../../application/protocols/iget.locally.user.account.repository';

import {GithubUserAccountEntity} from '../../bussiness/entities/github.account.entity';

export class LocalDatabaseRepository implements IGetLocallyUserAccountRepository {
  private readonly _accountAsyncKey = ASYNC_STORAGE_KEYS.ACCOUNT;

  public async getAccount(): Promise<GithubUserAccountEntity | undefined> {
    const account = await AsyncStorage.getItem(this._accountAsyncKey);
    if (account) {
      return JSON.parse(account);
    }
    return undefined;
  }
}
