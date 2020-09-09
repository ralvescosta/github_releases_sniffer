import {GithubRepositoryEntity} from '../../bussiness/entities/github.repository.entity';

export interface ISearchGithubRepoRepository {
  search(repository: string): Promise<GithubRepositoryEntity[]>;
}
