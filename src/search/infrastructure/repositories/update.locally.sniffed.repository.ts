import AsyncStorage from '@react-native-community/async-storage';
import {IUpdateLocallySniffedRepository} from '../../application/protocols/iupdate.locally.sniffed.repository';
import {SniffedGithubRepositoryEntity} from '../../bussiness/entities/sniffed.github.repository.entity';

export class UpdateLocallySniffedRepository implements IUpdateLocallySniffedRepository {
  /**
   * Singleton
   */
  private static instance: UpdateLocallySniffedRepository;
  private constructor() {}
  public static getInstance(): UpdateLocallySniffedRepository {
    if (!UpdateLocallySniffedRepository.instance) {
      UpdateLocallySniffedRepository.instance = new UpdateLocallySniffedRepository();
    }
    return UpdateLocallySniffedRepository.instance;
  }

  public async update(sniffedRepositories: SniffedGithubRepositoryEntity[]): Promise<void> {
    await AsyncStorage.setItem('@sniffed', JSON.stringify(sniffedRepositories));
  }
}
