import {IGetAccountAndSnifferRepository} from '../protocols/iget.account.and.sniffer.repository';

export class GetAccountAndSnifferRepositorySpy implements IGetAccountAndSnifferRepository {
  public async getUserAccountAndSniffer(): Promise<any> {}
}
