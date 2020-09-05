import {GithubUserAccountEntity} from '../entities/github.account.entity';

export interface ISignInUsecase {
  signin: (githubUser: string) => Promise<GithubUserAccountEntity>;
}
