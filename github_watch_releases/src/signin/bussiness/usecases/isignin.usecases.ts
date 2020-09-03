import {GithubUserAccountEntity} from '../entities/github.account.entity';

export interface ISignInUsecases {
  signin: (githubUser: string) => Promise<GithubUserAccountEntity>;
}
