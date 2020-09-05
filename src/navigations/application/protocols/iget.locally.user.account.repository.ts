import {GithubUserAccountEntity} from '../../bussiness/entities/github.account.entity';

export interface IGetLocallyUserAccountRepository {
  getAccount(): Promise<GithubUserAccountEntity | undefined>;
}
