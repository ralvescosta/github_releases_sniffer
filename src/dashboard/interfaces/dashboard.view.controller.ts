import {useContext, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import {SniffedRepositoriesContext} from '../../core/context/sniffed.repositories.context';

export class DashboardViewController {
  public context = useContext(SniffedRepositoriesContext);

  constructor() {
    useEffect(() => {
      this.getSniffedReposIntoCacheAndSetGlobalContext();
    }, []);
  }

  private async getSniffedReposIntoCacheAndSetGlobalContext() {
    const sniffed = await AsyncStorage.getItem('@sniffed');
    if (sniffed) {
      const sniffedJSON = await JSON.parse(sniffed);

      this.context.setSniffedRepositories(sniffedJSON);
    }
  }
}
