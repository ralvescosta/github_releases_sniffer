import {GitHubAccount} from '../entities/github.account';

export interface ISignInUsecases {
  signin: (githubUser: string) => Promise<GitHubAccount>;
}
