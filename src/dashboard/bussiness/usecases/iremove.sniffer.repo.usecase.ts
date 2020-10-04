import {SniffedGithubRepositoryEntity} from '../entities/sniffed.github.repository.entity';

export interface IRemoveSnifferRepoUsecase {
  remove: (repositoryId: number, snifferRepos: SniffedGithubRepositoryEntity[]) => Promise<SniffedGithubRepositoryEntity[]>;
}
