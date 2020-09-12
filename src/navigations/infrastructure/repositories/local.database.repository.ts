import AsyncStorage from '@react-native-community/async-storage';

import {IGetLocallyUserAccountRepository} from '../../application/protocols/iget.locally.user.account.repository';

import {GithubUserAccountEntity} from '../../bussiness/entities/github.account.entity';

export class LocalDatabaseRepository implements IGetLocallyUserAccountRepository {
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

  public async getAccount(): Promise<GithubUserAccountEntity | undefined> {
    const account = await AsyncStorage.getItem(this.accountAsyncKey);
    if (account) {
      return JSON.parse(account);
    }
    return undefined;
  }
}
