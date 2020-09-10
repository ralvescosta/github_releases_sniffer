import {useContext, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import {ObservedRepositoriesContext} from '../../core/context/observed.repositories.context';

export class DashboardViewController {
  public context = useContext(ObservedRepositoriesContext);

  constructor() {
    useEffect(() => {
      this.getObservedReposIntoCacheAndSetGlobalContext();
    }, []);
  }

  private async getObservedReposIntoCacheAndSetGlobalContext() {
    const observed = await AsyncStorage.getItem('@observed');
    if (observed) {
      const observedJSON = await JSON.parse(observed);

      this.context.setObservedRepositories(observedJSON);
    }
  }
}
