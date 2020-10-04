/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-community/async-storage';

export class LocalDatabaseRepository {
  _sniffedAsyncKey = '@sniffed';

  async getAllRepositories() {
    const repositories = await AsyncStorage.getItem(this._sniffedAsyncKey);

    const repositoriesJson = JSON.parse(repositories);

    return repositoriesJson;
  }
}
