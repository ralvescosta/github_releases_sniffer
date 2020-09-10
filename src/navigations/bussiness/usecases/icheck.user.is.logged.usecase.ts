import {GithubUserAccountEntity} from '../entities/github.account.entity';

export interface ICheckUserIsLoggedUsecase {
  check: () => Promise<GithubUserAccountEntity | undefined>;
}
