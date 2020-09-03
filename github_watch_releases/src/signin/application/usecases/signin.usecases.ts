import {GitHubAccount} from '../../bussiness/entities/github.account';
import {ISignInUsecases} from '../../bussiness/usecases/isignin.usecases';
import {IGithubFindUserRepository} from '../protocols/igithub.find.user.repository';
import {GitHubApiUserResult} from '../datastructure/github.api.user.result';

export class SignInUsecases implements ISignInUsecases {
  constructor(
    private readonly githubFindUserRepository: IGithubFindUserRepository,
  ) {}

  public async signin(githubUser: string): Promise<GitHubAccount> {
    try {
      const result = await this.githubFindUserRepository.search(githubUser);
    } catch (err) {
      console.log(err);
    }

    return {} as any;
  }
}
