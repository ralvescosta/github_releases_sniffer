import {SearchGithubRepositoryUsecase} from './search.github.repository.usecase';
import {SearchGithubRepoRepositorySpy} from '../__test__/search.github.repo.repository.spy';

type SutTypes = {
  sut: SearchGithubRepositoryUsecase;
  searchGithubRepositorySpy: SearchGithubRepoRepositorySpy;
};

function makeSut(): SutTypes {
  const searchGithubRepositorySpy = new SearchGithubRepoRepositorySpy();
  const sut = new SearchGithubRepositoryUsecase(searchGithubRepositorySpy);

  return {
    sut,
    searchGithubRepositorySpy,
  };
}

describe('Search GithubRepository Usecase', () => {
  it('search()', async () => {
    const {sut, searchGithubRepositorySpy} = makeSut();

    jest.spyOn(searchGithubRepositorySpy, 'search');

    await sut.search('some_repository', []);

    expect(searchGithubRepositorySpy.search).toHaveBeenCalledTimes(1);
  });

  it('Should throw some Error if SearchGithubRepoRepository Throws', async () => {
    const {sut, searchGithubRepositorySpy} = makeSut();

    jest.spyOn(searchGithubRepositorySpy, 'search').mockRejectedValueOnce(new Error());

    const result = sut.search('some_repository', []);

    await expect(result).rejects.toThrow(new Error());
  });

  it('Should throw some Error if SearchGithubRepoRepository return empty array', async () => {
    const {sut, searchGithubRepositorySpy} = makeSut();

    jest.spyOn(searchGithubRepositorySpy, 'search').mockResolvedValueOnce([]);

    const result = sut.search('some_repository', []);

    await expect(result).rejects.toThrow(new Error());
  });

  it('Should returns array of ResultSearchGithubRepositoryEntity with checked=true', async () => {
    const {sut, searchGithubRepositorySpy} = makeSut();

    jest.spyOn(searchGithubRepositorySpy, 'search').mockResolvedValueOnce([searchGithubRepositorySpy.resultSearchEntity]);

    const result = await sut.search('some_repository', [searchGithubRepositorySpy.sniffedEntity]);

    expect(result[0].checked).toBeTruthy();
  });

  it('Should returns array of ResultSearchGithubRepositoryEntity with checked=false', async () => {
    const {sut, searchGithubRepositorySpy} = makeSut();

    jest.spyOn(searchGithubRepositorySpy, 'search').mockResolvedValueOnce([searchGithubRepositorySpy.resultSearchEntity]);

    const result = await sut.search('some_repository', []);

    expect(result[0].checked).toBeFalsy();
  });
});
