import {ResultSearchGithubRepositoryEntity} from '../../bussiness/entities/result.search.github.repository.entity';
import {IGetLastSniffedReleaseRepository} from '../../application/protocols/iget.last.sniffed.release.repository';
import {ISearchGithubRepoRepository} from '../../application/protocols/isearch.github.repo.repository';
import {GithubRepositoryReleasesDatasource} from '../datasources/github.repository.releases.datasource';
import {GithubSearchRepositoryDatasource} from '../datasources/github.search.repository.datasource';

export class HttpClintGithubApiRepository implements ISearchGithubRepoRepository, IGetLastSniffedReleaseRepository {
  private readonly _githubSearchRepoBaseUrl = 'https://api.github.com/search/repositories?q=';

  /**
   * Singleton
   */
  private static instance: HttpClintGithubApiRepository;
  private constructor() {}
  public static getInstance(): HttpClintGithubApiRepository {
    if (!HttpClintGithubApiRepository.instance) {
      HttpClintGithubApiRepository.instance = new HttpClintGithubApiRepository();
    }

    return HttpClintGithubApiRepository.instance;
  }

  public async search(repository: string): Promise<ResultSearchGithubRepositoryEntity[]> {
    let httpBody: GithubSearchRepositoryDatasource;
    try {
      const httpResponse = await fetch(`${this._githubSearchRepoBaseUrl}${repository}`);

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
          `${item.releases_url.split('{')[0]}/latest`,
        ),
      );
    });

    return result;
  }

  public async get(releasesUrl: string): Promise<any> {
    let httpBody: GithubRepositoryReleasesDatasource;
    try {
      const httpResponse = await fetch(releasesUrl, {method: 'GET'});

      if (httpResponse.status >= 400) {
        throw new Error(`${httpResponse.status}`);
      }

      httpBody = await httpResponse.json();

      if (!httpBody) {
        throw new Error('404');
      }
    } catch (err) {
      throw new Error();
    }

    return {
      tagName: httpBody.tag_name,
    };
  }
}
