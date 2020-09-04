import {GithubUserAccountEntity} from '../../bussiness/entities/github.account.entity';
import {ISignInUsecase} from '../../bussiness/usecases/isignin.usecase';
import {IGithubSearchUserRepository} from '../protocols/igithub.search.user.repository';
import {ISaveLocallyUserAccountRepository} from '../protocols/isave.locally.user.account.repository';

export class SignInUsecases implements ISignInUsecase {
  constructor(
    private readonly githubFindUserRepository: IGithubSearchUserRepository,
    private readonly localDatabaseRepository: ISaveLocallyUserAccountRepository,
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
