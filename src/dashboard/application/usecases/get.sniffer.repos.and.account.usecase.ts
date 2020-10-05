import {IGetSnifferReposAndAccountUsecase} from '../../bussiness/usecases/iget.sniffer.repos.and.account.usecase';
import {IGetAccountAndSnifferRepository} from '../protocols/iget.account.and.sniffer.repository';

export class GetSnifferReposAndAccountUsecase implements IGetSnifferReposAndAccountUsecase {
  constructor(private readonly _getAccountAndSnifferRepository: IGetAccountAndSnifferRepository) {}

  public async get(): Promise<any> {
    const result = await this._getAccountAndSnifferRepository.getUserAccountAndSniffer();
    return result;
  }
}
