import AsyncStorage from '@react-native-community/async-storage';

import {ISaveLocallyUserAccountRepository} from '../../application/protocols/isave.locally.user.account.repository';

import {GithubUserAccountEntity} from '../../bussiness/entities/github.account.entity';

export class LocalDatabaseRepository implements ISaveLocallyUserAccountRepository {
  public accountAsyncKey = '@account';

  public async registerUser(userAccount: GithubUserAccountEntity): Promise<boolean> {
    await AsyncStorage.setItem(this.accountAsyncKey, JSON.stringify(userAccount));
    return true;
  }
}
