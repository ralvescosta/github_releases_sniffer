import {SniffedGithubRepositoryEntity} from '../../bussiness/entities/sniffed.github.repository.entity';

export interface IUpdateLocallySniffedRepository {
  update: (sniffedRepositories: SniffedGithubRepositoryEntity[]) => Promise<void>;
}
