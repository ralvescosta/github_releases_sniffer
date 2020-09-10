import {ISearchGithubRepositoryUsecase} from '../../bussiness/usecases/isearch.github.repository.usecase';
import {ISearchGithubRepoRepository} from '../protocols/isearch.github.repo.repository';

import {ResultSearchGithubRepositoryEntity} from '../../bussiness/entities/result.search.github.repository.entity';
import {ObservedGithubRepositoryEntity} from '../../bussiness/entities/observed.github.repository.entity';

export class SearchGithubRepositoryUsecase implements ISearchGithubRepositoryUsecase {
  constructor(private readonly searchGithubRepository: ISearchGithubRepoRepository) {}
  public async search(
    repository: string,
    observedRepositories: ObservedGithubRepositoryEntity[],
  ): Promise<ResultSearchGithubRepositoryEntity[]> {
    let response: ResultSearchGithubRepositoryEntity[] = [];
    try {
      response = await this.searchGithubRepository.search(repository);
    } catch (err) {
      console.log(err);
    }

    if (!response.length) {
      return [];
    }

    const resultSearch: ResultSearchGithubRepositoryEntity[] = [];
    /**
     * Check if user already selected this repository
     */
    response.forEach((item: ResultSearchGithubRepositoryEntity) => {
      const checkResultSearch = observedRepositories.findIndex((repo) => repo.fullName === item.fullName);
      if (checkResultSearch === -1) {
        resultSearch.push(item);
      } else {
        resultSearch.push({...item, checked: true});
      }
    });

    return resultSearch;
  }
}
