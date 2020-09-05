import {IGithubSearchUserRepository} from '../protocols/igithub.search.user.repository';
import {GithubUserAccountEntity} from '../../bussiness/entities/github.account.entity';

export class GithubSearchUserRepositorySpy implements IGithubSearchUserRepository {
  public entity: GithubUserAccountEntity;
  public gitUser = '';

  constructor() {
    this.entity = new GithubUserAccountEntity(1, 'login', 'avatarUrl', 'name', 'bio', 5, 5, 5);
  }

  search(gitUser: string): Promise<GithubUserAccountEntity> {
    this.gitUser = gitUser;
    return Promise.resolve(this.entity);
  }
}
