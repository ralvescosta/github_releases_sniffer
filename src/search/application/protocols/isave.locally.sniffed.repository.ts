import {SniffedGithubRepositoryEntity} from '../../bussiness/entities/sniffed.github.repository.entity';

export interface ISaveLocallySniffedRepository {
  saveSniffed: (entity: SniffedGithubRepositoryEntity) => Promise<boolean>;
}
