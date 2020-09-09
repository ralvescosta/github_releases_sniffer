import {ResultSearchGithubRepositoryEntity} from '../../bussiness/entities/result.search.github.repository.entity';
import {ISearchGithubRepoRepository} from '../../application/protocols/isearch.github.repo.repository';
import {GithubSearchRepositoryDatasource} from '../datasources/github.search.repository.datasource';

export class SearchGithubRepoRepository implements ISearchGithubRepoRepository {
  public githubSearchRepoBaseUrl = 'https://api.github.com/search/repositories?q=';

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
        ),
      );
    });

    return result;
  }
}
