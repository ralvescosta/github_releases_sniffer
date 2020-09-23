import {useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import {ASYNC_STORAGE_KEYS} from '../../core/defines/enums';

import {SniffedRepositoriesContext} from '../../core/context/sniffed.repositories.context';

export class DashboardViewController {
  public context = useContext(SniffedRepositoriesContext);
  public userAccount: any;
  public setUserAccount: any;

  constructor() {
    [this.userAccount, this.setUserAccount] = useState({});

    useEffect(() => {
      this.getSniffedReposAndAccountIntoCacheAndSetGlobalContext();
    }, []);
  }

  private async getSniffedReposAndAccountIntoCacheAndSetGlobalContext() {
    const sniffed = await AsyncStorage.getItem(ASYNC_STORAGE_KEYS.SNIFFED);
    const userAccount = await AsyncStorage.getItem(ASYNC_STORAGE_KEYS.ACCOUNT);

    if (sniffed) {
      const sniffedJSON = await JSON.parse(sniffed);

      this.context.setSniffedRepositories(sniffedJSON);
    }
    if (userAccount) {
      this.setUserAccount(JSON.parse(userAccount));
    }
  }
}
