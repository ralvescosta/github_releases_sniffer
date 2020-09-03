import {IGithubSearchUserRepository} from '../../application/protocols/igithub.search.user.repository';
import {GitHubAccount} from '../../bussiness/entities/github.account';

export class GitHubSearchUser implements IGithubSearchUserRepository {
  public async search(gitUser: string): Promise<GitHubAccount> {
    const githubSearchUrlBase = 'https://api.github.com/users/';

    const response = await fetch(`${githubSearchUrlBase}${gitUser}`, {
      method: 'GET',
    });

    console.log(response);

    return response as any;
  }
}
