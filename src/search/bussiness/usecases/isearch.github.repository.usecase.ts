import {ResultSearchGithubRepositoryEntity} from '../entities/result.search.github.repository.entity';

export interface ISearchGithubRepositoryUsecase {
  search(repository: string, observedRepositories: any): Promise<ResultSearchGithubRepositoryEntity[]>;
}
