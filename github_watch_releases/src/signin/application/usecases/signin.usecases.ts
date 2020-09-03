import {GithubUserAccountEntity} from '../../bussiness/entities/github.account.entity';
import {ISignInUsecases} from '../../bussiness/usecases/isignin.usecases';
import {IGithubSearchUserRepository} from '../protocols/igithub.search.user.repository';

export class SignInUsecases implements ISignInUsecases {
  constructor(
    private readonly githubFindUserRepository: IGithubSearchUserRepository,
  ) {}

  public async signin(githubUser: string): Promise<GithubUserAccountEntity> {
    try {
      const result = await this.githubFindUserRepository.search(githubUser);
      return result;
    } catch (err) {
      console.log(err);
    }

    return {} as any;
  }
}
