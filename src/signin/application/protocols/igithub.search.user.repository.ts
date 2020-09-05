import {GithubUserAccountEntity} from '../../bussiness/entities/github.account.entity';

export interface IGithubSearchUserRepository {
  search: (gitUser: string) => Promise<GithubUserAccountEntity>;
}
