import {ICheckUserIsLoggedUsecase} from '../../bussiness/usecases/icheck.user.is.logged.usecase';

export class CheckUserIsLoggedUsecase implements ICheckUserIsLoggedUsecase {
  constructor() {}
  check(): Promise<boolean> {
    return Promise.resolve(false);
  }
}
