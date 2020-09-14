import {ResultSearchGithubRepositoryEntity} from '../../bussiness/entities/result.search.github.repository.entity';
import {ISearchGithubRepoRepository} from '../../application/protocols/isearch.github.repo.repository';
import {SniffedGithubRepositoryEntity} from '../../bussiness/entities/sniffed.github.repository.entity';

export class SearchGithubRepoRepositorySpy implements ISearchGithubRepoRepository {
  public repository = '';
  public sniffedEntity = new SniffedGithubRepositoryEntity(1, '', '', 10, 10, 10, 1, '', '', '');
  public resultSearchEntity = new ResultSearchGithubRepositoryEntity(1, '', '', 10, 10, 10, 1, '', '');

  public async search(repository: string): Promise<ResultSearchGithubRepositoryEntity[]> {
    this.repository = repository;
    const result = [this.resultSearchEntity];

    return result;
  }
}
