import {ILocalDatabaseRepository} from '../../application/protocols/ilocal.database.repository';
import {GithubUserAccountEntity} from '../../bussiness/entities/github.account.entity';
import AsyncStorage from '@react-native-community/async-storage';

export class LocalDatabaseRepository implements ILocalDatabaseRepository {
  public async registerUser(
    userAccount: GithubUserAccountEntity,
  ): Promise<boolean> {
    try {
      await AsyncStorage.setItem('@account', JSON.stringify(userAccount));
      return true;
    } catch (e) {
      return false;
    }
  }
}
