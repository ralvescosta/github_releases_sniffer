import {ISignInUsecase} from '../../bussiness/usecases/isignin.usecase';
import {GithubUserAccountEntity} from '../../bussiness/entities/github.account.entity';

export class SignInUsecaseSpy implements ISignInUsecase {
  public result: GithubUserAccountEntity;
  public githubUser = '';

  constructor() {
    this.result = new GithubUserAccountEntity(1, 'login', 'avatarUrl', 'name', 'bio', 5, 5, 5);
  }

  public async signin(githubUser: string): Promise<GithubUserAccountEntity> {
    this.githubUser = githubUser;
    return this.result;
  }
}
