import AsyncStorage from '@react-native-community/async-storage';
import {ASYNC_STORAGE_KEYS} from '../../../core/defines/enums';
import {IGetAccountAndSnifferRepository} from '../../application/protocols/iget.account.and.sniffer.repository';

export class LocalDatabaseRepository implements IGetAccountAndSnifferRepository {
  private readonly _accountAsyncKey = ASYNC_STORAGE_KEYS.ACCOUNT;
  private readonly _snifferAsyncKey = ASYNC_STORAGE_KEYS.SNIFFED;

  public async getUserAccountAndSniffer(): Promise<any> {
    const userAsString = await AsyncStorage.getItem(this._accountAsyncKey);
    let user;
    if (userAsString) {
      user = JSON.parse(userAsString);
    }

    const snifferAsString = await AsyncStorage.getItem(this._snifferAsyncKey);
    let sniffer;
    if (snifferAsString) {
      sniffer = JSON.parse(snifferAsString);
    }

    return {user, sniffer};
  }
}
