import AsyncStorage from '@react-native-community/async-storage';

import {ISaveLocallyUserAccountRepository} from '../../application/protocols/isave.locally.user.account.repository';

import {GithubUserAccountEntity} from '../../bussiness/entities/github.account.entity';

export class LocalDatabaseRepository implements ISaveLocallyUserAccountRepository {
  private readonly accountAsyncKey = '@account';

  /**
   * Singleton
   */
  private static instance: LocalDatabaseRepository;
  private constructor() {}
  public static getInstance(): LocalDatabaseRepository {
    if (!LocalDatabaseRepository.instance) {
      LocalDatabaseRepository.instance = new LocalDatabaseRepository();
    }

    return LocalDatabaseRepository.instance;
  }

  public async registerUser(userAccount: GithubUserAccountEntity): Promise<boolean> {
    await AsyncStorage.setItem(this.accountAsyncKey, JSON.stringify(userAccount));
    return true;
  }
}
