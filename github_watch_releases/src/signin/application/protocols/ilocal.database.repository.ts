import {GithubUserAccountEntity} from '../../bussiness/entities/github.account.entity';

export interface ILocalDatabaseRepository {
  registerUser(userAccount: GithubUserAccountEntity): Promise<boolean>;
}
