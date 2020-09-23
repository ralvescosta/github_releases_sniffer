import {GithubUserAccountEntity} from '../../bussiness/entities/github.account.entity';
import {ISignInUsecase} from '../../bussiness/usecases/isignin.usecase';
import {IGithubSearchUserRepository} from '../protocols/igithub.search.user.repository';
import {ISaveLocallyUserAccountRepository} from '../protocols/isave.locally.user.account.repository';

export class SignInUsecases implements ISignInUsecase {
  constructor(
    private readonly _githubFindUserRepository: IGithubSearchUserRepository,
    private readonly _localDatabaseRepository: ISaveLocallyUserAccountRepository,
  ) {}

  public async signin(githubUser: string): Promise<GithubUserAccountEntity> {
    try {
      const result = await this._githubFindUserRepository.search(githubUser);
      await this._localDatabaseRepository.registerUser(result);
      return result;
    } catch (err) {
      throw new Error();
    }
  }
}
