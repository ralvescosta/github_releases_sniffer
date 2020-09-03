import {GitHubAccount} from '../../bussiness/entities/github.account';

export interface IGithubSearchUserRepository {
  search: (gitUser: string) => Promise<GitHubAccount>;
}
