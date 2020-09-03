import {GitHubApiUserResult} from '../datastructure/github.api.user.result';

export interface IGithubFindUserRepository {
  search: (gitUser: string) => Promise<GitHubApiUserResult>;
}
