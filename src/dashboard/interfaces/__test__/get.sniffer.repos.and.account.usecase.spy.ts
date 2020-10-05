import {IGetSnifferReposAndAccountUsecase} from '../../bussiness/usecases/iget.sniffer.repos.and.account.usecase';

export class GetSnifferReposAndAccountUsecaseSpy implements IGetSnifferReposAndAccountUsecase {
  public async get(): Promise<any> {
    return {};
  }
}
