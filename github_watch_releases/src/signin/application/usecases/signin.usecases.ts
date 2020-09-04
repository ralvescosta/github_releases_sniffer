import {GithubUserAccountEntity} from '../../bussiness/entities/github.account.entity';
import {ISignInUsecases} from '../../bussiness/usecases/isignin.usecases';
import {IGithubSearchUserRepository} from '../protocols/igithub.search.user.repository';
import {ILocalDatabaseRepository} from '../protocols/ilocal.database.repository';

export class SignInUsecases implements ISignInUsecases {
  constructor(
    private readonly githubFindUserRepository: IGithubSearchUserRepository,
    private readonly localDatabaseRepository: ILocalDatabaseRepository,
  ) {}

  public async signin(githubUser: string): Promise<GithubUserAccountEntity> {
    try {
      const result = await this.githubFindUserRepository.search(githubUser);
      await this.localDatabaseRepository.registerUser(result);
      return result;
    } catch (err) {
      throw new Error();
    }
  }
}
