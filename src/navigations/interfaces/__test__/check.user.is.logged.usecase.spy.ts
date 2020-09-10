import {ICheckUserIsLoggedUsecase} from '../../bussiness/usecases/icheck.user.is.logged.usecase';
import {GithubUserAccountEntity} from '../../bussiness/entities/github.account.entity';

export class CheckUserIsLoggedUsecaseSpy implements ICheckUserIsLoggedUsecase {
  public result = true;
  public entity = new GithubUserAccountEntity(1, '', '', '', '', 10, 10, 10);

  constructor(result: boolean) {
    this.result = result;
  }

  public async check(): Promise<GithubUserAccountEntity | undefined> {
    return this.entity;
  }
}
