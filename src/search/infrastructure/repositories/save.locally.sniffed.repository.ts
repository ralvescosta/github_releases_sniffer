import AsyncStorage from '@react-native-community/async-storage';
import {SniffedGithubRepositoryEntity} from '../../bussiness/entities/sniffed.github.repository.entity';
import {ISaveLocallySniffedRepository} from '../../application/protocols/isave.locally.sniffed.repository';

export class SaveLocallySniffedRepository implements ISaveLocallySniffedRepository {
  /**
   * Singleton
   */
  private static instance: SaveLocallySniffedRepository;
  private constructor() {}
  public static getInstance(): SaveLocallySniffedRepository {
    if (!SaveLocallySniffedRepository.instance) {
      SaveLocallySniffedRepository.instance = new SaveLocallySniffedRepository();
    }
    return SaveLocallySniffedRepository.instance;
  }

  public async saveSniffed(entity: SniffedGithubRepositoryEntity): Promise<boolean> {
    const sniffedSaved = await AsyncStorage.getItem('@sniffed');

    let sniffedSavedJSON = [];
    if (sniffedSaved) {
      sniffedSavedJSON = JSON.parse(sniffedSaved);
      sniffedSavedJSON.push(entity);
    }

    await AsyncStorage.setItem('@sniffed', JSON.stringify(sniffedSavedJSON));
    return true;
  }
}
