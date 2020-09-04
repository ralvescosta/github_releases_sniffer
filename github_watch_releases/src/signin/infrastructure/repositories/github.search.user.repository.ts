import {IGithubSearchUserRepository} from '../../application/protocols/igithub.search.user.repository';
import {GithubUserAccountEntity} from '../../bussiness/entities/github.account.entity';
import {GithubSearchUserDataSource} from '../datastructure/github.search.user.datasource';

export class GithubSearchUserRepository implements IGithubSearchUserRepository {
  public githubSearchUrlBase = 'https://api.github.com/users/';

  public async search(gitUser: string): Promise<GithubUserAccountEntity> {
    let httpBody: GithubSearchUserDataSource;
    try {
      const httpResponse = await fetch(
        `${this.githubSearchUrlBase}${gitUser}`,
        {
          method: 'GET',
        },
      );
      if (httpResponse.status >= 400) {
        throw new Error(`${httpResponse.status}`);
      }
      httpBody = await httpResponse.json();
    } catch (err) {
      throw new Error();
    }

    const entity = new GithubUserAccountEntity(
      httpBody.id,
      httpBody.login,
      httpBody.avatar_url,
      httpBody.name,
      httpBody.bio,
      httpBody.public_repos,
      httpBody.followers,
      httpBody.following,
    );

    return entity;
  }
}
