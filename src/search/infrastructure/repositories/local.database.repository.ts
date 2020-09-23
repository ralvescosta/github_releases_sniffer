import AsyncStorage from '@react-native-community/async-storage';

import {SniffedGithubRepositoryEntity} from '../../bussiness/entities/sniffed.github.repository.entity';
import {ISaveLocallySniffedRepository} from '../../application/protocols/isave.locally.sniffed.repository';
import {IUpdateLocallySniffedRepository} from '../../application/protocols/iupdate.locally.sniffed.repository';

export class LocalDatabaseRepository implements ISaveLocallySniffedRepository, IUpdateLocallySniffedRepository {
  private readonly _sniffedAsyncKey = '@sniffed';

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

  public async update(sniffedRepositories: SniffedGithubRepositoryEntity[]): Promise<boolean> {
    await AsyncStorage.setItem(this._sniffedAsyncKey, JSON.stringify(sniffedRepositories));
    return true;
  }

  public async saveSniffed(entity: SniffedGithubRepositoryEntity): Promise<boolean> {
    const sniffedSaved = await AsyncStorage.getItem(this._sniffedAsyncKey);

    let sniffedSavedJSON = [];
    if (sniffedSaved) {
      sniffedSavedJSON = JSON.parse(sniffedSaved);
    }
    sniffedSavedJSON.push(entity);

    await AsyncStorage.setItem(this._sniffedAsyncKey, JSON.stringify(sniffedSavedJSON));
    return true;
  }
}
