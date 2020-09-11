import {ResultSearchGithubRepositoryEntity} from '../../bussiness/entities/result.search.github.repository.entity';

export interface ISearchGithubRepoRepository {
  search: (repository: string) => Promise<ResultSearchGithubRepositoryEntity[]>;
}
