import {GithubUserAccountEntity} from '../../bussiness/entities/github.account.entity';
import {IGetLocallyUserAccountRepository} from '../protocols/iget.locally.user.account.repository';

export class GetLocallyUserAccountRepositorySpy implements IGetLocallyUserAccountRepository {
  public entity: GithubUserAccountEntity;

  constructor() {
    this.entity = new GithubUserAccountEntity(1, 'login', 'avatarUrl', 'name', 'bio', 5, 5, 5);
  }

  public async getAccount(): Promise<GithubUserAccountEntity | undefined> {
    return this.entity;
  }
}
