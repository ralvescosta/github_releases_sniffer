import {IGetAccountAndSnifferRepository} from '../protocols/iget.account.and.sniffer.repository';

export class GetSnifferReposAndAccountUsecase {
  constructor(private readonly _getAccountAndSnifferRepository: IGetAccountAndSnifferRepository) {}

  public async get(): Promise<any> {
    const result = await this._getAccountAndSnifferRepository.getUserAccountAndSniffer();
    return result;
  }
}
