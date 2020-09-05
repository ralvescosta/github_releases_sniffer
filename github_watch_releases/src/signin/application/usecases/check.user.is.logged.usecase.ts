import {ICheckUserIsLoggedUsecase} from '../../bussiness/usecases/icheck.user.is.logged.usecase';
import {IGetLocallyUserAccountRepository} from '../protocols/iget.locally.user.account.repository';

export class CheckUserIsLoggedUsecase implements ICheckUserIsLoggedUsecase {
  constructor(private readonly localDatabaseRepository: IGetLocallyUserAccountRepository) {}
  public async check(): Promise<boolean> {
    const account = await this.localDatabaseRepository.getAccount();

    if (account) {
      return true;
    }

    return false;
  }
}
