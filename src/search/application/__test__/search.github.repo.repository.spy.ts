import {ResultSearchGithubRepositoryEntity} from '../../bussiness/entities/result.search.github.repository.entity';
import {ISearchGithubRepoRepository} from '../../application/protocols/isearch.github.repo.repository';

export class SearchGithubRepoRepositorySpy implements ISearchGithubRepoRepository {
  public repository = '';
  public resultSearchEntity = new ResultSearchGithubRepositoryEntity(
    1,
    'full_name',
    'description',
    10,
    10,
    10,
    1,
    'avatar_url',
    'releases_url',
  );

  public async search(repository: string): Promise<ResultSearchGithubRepositoryEntity[]> {
    this.repository = repository;
    const result = [this.resultSearchEntity];

    return result;
  }
}
