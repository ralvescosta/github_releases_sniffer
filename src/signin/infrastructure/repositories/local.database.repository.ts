import AsyncStorage from '@react-native-community/async-storage';
import {ASYNC_STORAGE_KEYS} from '../../../core/defines/enums';

import {ISaveLocallyUserAccountRepository} from '../../application/protocols/isave.locally.user.account.repository';

import {GithubUserAccountEntity} from '../../bussiness/entities/github.account.entity';

export class LocalDatabaseRepository implements ISaveLocallyUserAccountRepository {
  private readonly _accountAsyncKey = ASYNC_STORAGE_KEYS.ACCOUNT;

  public async registerUser(userAccount: GithubUserAccountEntity): Promise<boolean> {
    await AsyncStorage.setItem(this._accountAsyncKey, JSON.stringify(userAccount));
    return true;
  }
}
