import {ResultSearchGithubRepositoryEntity} from '../../bussiness/entities/result.search.github.repository.entity';
import {ISearchGithubRepoRepository} from '../../application/protocols/isearch.github.repo.repository';
import {GithubSearchRepositoryDatasource} from '../datasources/github.search.repository.datasource';

export class SearchGithubRepoRepository implements ISearchGithubRepoRepository {
  private readonly githubSearchRepoBaseUrl = 'https://api.github.com/search/repositories?q=';

  /**
   * Singleton
   */
  private static instance: SearchGithubRepoRepository;
  private constructor() {}
  public static getInstance(): SearchGithubRepoRepository {
    if (!SearchGithubRepoRepository.instance) {
      SearchGithubRepoRepository.instance = new SearchGithubRepoRepository();
    }
    return SearchGithubRepoRepository.instance;
  }

  public async search(repository: string): Promise<ResultSearchGithubRepositoryEntity[]> {
    let httpBody: GithubSearchRepositoryDatasource;
    try {
      const httpResponse = await fetch(`${this.githubSearchRepoBaseUrl}${repository}`);

      if (httpResponse.status >= 400) {
        throw new Error(`${httpResponse.status}`);
      }
      httpBody = await httpResponse.json();
    } catch (err) {
      throw new Error();
    }

    const result: ResultSearchGithubRepositoryEntity[] = [];

    httpBody.items.forEach((item) => {
      result.push(
        new ResultSearchGithubRepositoryEntity(
          item.id,
          item.full_name,
          item.description,
          item.stargazers_count,
          item.forks,
          item.open_issues,
          item.owner.id,
          item.owner.avatar_url,
          item.releases_url.split('{')[0],
        ),
      );
    });

    return result;
  }
}
