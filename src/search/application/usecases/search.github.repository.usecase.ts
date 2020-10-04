import {ISearchGithubRepositoryUsecase} from '../../bussiness/usecases/isearch.github.repository.usecase';
import {ISearchGithubRepoRepository} from '../protocols/isearch.github.repo.repository';

import {ResultSearchGithubRepositoryEntity} from '../../bussiness/entities/result.search.github.repository.entity';
import {SniffedGithubRepositoryEntity} from '../../bussiness/entities/sniffed.github.repository.entity';

export class SearchGithubRepositoryUsecase implements ISearchGithubRepositoryUsecase {
  constructor(private readonly _searchGithubRepository: ISearchGithubRepoRepository) {}
  public async search(
    repository: string,
    sniffedRepositories: SniffedGithubRepositoryEntity[],
  ): Promise<ResultSearchGithubRepositoryEntity[]> {
    let response: ResultSearchGithubRepositoryEntity[] = [];
    try {
      response = await this._searchGithubRepository.search(repository);
    } catch (err) {
      throw new Error();
    }

    if (!response.length) {
      throw new Error();
    }

    const resultSearch: ResultSearchGithubRepositoryEntity[] = [];
    /**
     * Check if user already selected this repository
     */
    response.forEach((item: ResultSearchGithubRepositoryEntity) => {
      const checkResultSearch = sniffedRepositories.findIndex((repo) => repo.id === item.id);
      if (checkResultSearch === -1) {
        resultSearch.push(item);
      } else {
        resultSearch.push({...item, checked: true});
      }
    });

    return resultSearch;
  }
}
