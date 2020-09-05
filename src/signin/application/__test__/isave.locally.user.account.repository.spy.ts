import {ISaveLocallyUserAccountRepository} from '../protocols/isave.locally.user.account.repository';
import {GithubUserAccountEntity} from '../../bussiness/entities/github.account.entity';

export class SaveLocallyUserAccountRepositorySpy implements ISaveLocallyUserAccountRepository {
  public result = true;
  public userAccount: GithubUserAccountEntity | undefined;

  registerUser(userAccount: GithubUserAccountEntity): Promise<boolean> {
    this.userAccount = userAccount;

    return Promise.resolve(this.result);
  }
}
