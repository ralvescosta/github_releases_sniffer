import {SignInUsecases} from './signin.usecases';
import {GithubSearchUserRepositorySpy} from '../__test__/igithub.search.user.repository.spy';
import {SaveLocallyUserAccountRepositorySpy} from '../__test__/isave.locally.user.account.repository.spy';

type SutTypes = {
  sut: SignInUsecases;
  githubSearchUserRepositorySpy: GithubSearchUserRepositorySpy;
  saveLocallyUserAccountRepositorySpy: SaveLocallyUserAccountRepositorySpy;
};

function makeSut(): SutTypes {
  const githubSearchUserRepositorySpy = new GithubSearchUserRepositorySpy();
  const saveLocallyUserAccountRepositorySpy = new SaveLocallyUserAccountRepositorySpy();

  const sut = new SignInUsecases(githubSearchUserRepositorySpy, saveLocallyUserAccountRepositorySpy);

  return {
    sut,
    githubSearchUserRepositorySpy,
    saveLocallyUserAccountRepositorySpy,
  };
}

describe('Signin Usecases', () => {
  it('signin()', async () => {
    const {sut, githubSearchUserRepositorySpy, saveLocallyUserAccountRepositorySpy} = makeSut();
    jest.spyOn(githubSearchUserRepositorySpy, 'search').mockResolvedValueOnce(githubSearchUserRepositorySpy.entity);
    jest.spyOn(saveLocallyUserAccountRepositorySpy, 'registerUser').mockResolvedValueOnce({} as never);

    await sut.signin('some_user');

    expect(githubSearchUserRepositorySpy.search).toHaveBeenCalledTimes(1);
    expect(saveLocallyUserAccountRepositorySpy.registerUser).toHaveBeenCalledTimes(1);
  });

  it('Should throw Error if any error occur', async () => {
    const {sut, githubSearchUserRepositorySpy, saveLocallyUserAccountRepositorySpy} = makeSut();
    jest.spyOn(githubSearchUserRepositorySpy, 'search').mockRejectedValueOnce(new Error());

    let promisse = sut.signin('some_user');

    expect(promisse).rejects.toThrow(new Error());

    jest.spyOn(githubSearchUserRepositorySpy, 'search').mockResolvedValueOnce(githubSearchUserRepositorySpy.entity);
    jest.spyOn(saveLocallyUserAccountRepositorySpy, 'registerUser').mockRejectedValueOnce(new Error());

    promisse = sut.signin('some_user');

    expect(promisse).rejects.toThrow(new Error());
  });
});
