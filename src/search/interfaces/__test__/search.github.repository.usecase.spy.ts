import {ISearchGithubRepositoryUsecase} from '../../bussiness/usecases/isearch.github.repository.usecase';

import {ResultSearchGithubRepositoryEntity} from '../../bussiness/entities/result.search.github.repository.entity';
import {SniffedGithubRepositoryEntity} from '../../bussiness/entities/sniffed.github.repository.entity';

export class SearchGithubRepositoryUsecaseSpy implements ISearchGithubRepositoryUsecase {
  public repository: string = '';
  public sniffedEntity = [new SniffedGithubRepositoryEntity(1, '', '', 10, 10, 10, 1, '', '', '')];

  public resultSearchEntity = new ResultSearchGithubRepositoryEntity(1, '', '', 10, 10, 10, 1, '', '');
  public async search(
    repository: string,
    sniffedRepositories: SniffedGithubRepositoryEntity[],
  ): Promise<ResultSearchGithubRepositoryEntity[]> {
    this.repository = repository;
    this.sniffedEntity = sniffedRepositories;

    return [this.resultSearchEntity];
  }
}
