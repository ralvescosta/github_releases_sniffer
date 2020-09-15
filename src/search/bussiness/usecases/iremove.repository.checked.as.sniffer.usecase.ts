import {SniffedGithubRepositoryEntity} from '../entities/sniffed.github.repository.entity';

export interface IRemoveRepositoryCheckedAsSnifferUsecase {
  remove(removedRepositoryId: number, sniffedRepositories: SniffedGithubRepositoryEntity[]): Promise<SniffedGithubRepositoryEntity[]>;
}
