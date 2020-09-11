import {ICheckUserIsLoggedUsecase} from '../../bussiness/usecases/icheck.user.is.logged.usecase';
import {IGetLocallyUserAccountRepository} from '../protocols/iget.locally.user.account.repository';
import {GithubUserAccountEntity} from '../../bussiness/entities/github.account.entity';

export class CheckUserIsLoggedUsecase implements ICheckUserIsLoggedUsecase {
  constructor(private readonly localDatabaseRepository: IGetLocallyUserAccountRepository) {}
  public async check(): Promise<GithubUserAccountEntity | undefined> {
    const account = await this.localDatabaseRepository.getAccount();

    if (account) {
      return account;
    }

    return undefined;
  }
}
