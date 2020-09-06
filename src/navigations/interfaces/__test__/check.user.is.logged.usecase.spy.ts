import {ICheckUserIsLoggedUsecase} from '../../bussiness/usecases/icheck.user.is.logged.usecase';

export class CheckUserIsLoggedUsecaseSpy implements ICheckUserIsLoggedUsecase {
  public result = true;

  constructor(result: boolean) {
    this.result = result;
  }

  public async check(): Promise<boolean> {
    return this.result;
  }
}
