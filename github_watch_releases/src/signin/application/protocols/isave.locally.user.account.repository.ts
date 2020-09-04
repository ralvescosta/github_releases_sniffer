import {GithubUserAccountEntity} from '../../bussiness/entities/github.account.entity';

export interface ISaveLocallyUserAccountRepository {
  registerUser(userAccount: GithubUserAccountEntity): Promise<boolean>;
}
