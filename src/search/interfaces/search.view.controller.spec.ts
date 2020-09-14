import 'react';
import 'react-native';
import {SearchViewController} from './search.view.controller';
import {SearchGithubRepositoryUsecaseSpy} from './__test__/search.github.repository.usecase.spy';

jest.mock('react', () => ({
  useRef: jest.fn(() => ({current: 'some_value'})),
  useState: jest.fn(() => [[], jest.fn()]),
  useEffect: jest.fn(() => {}),
  useContext: jest.fn(() => ({sniffedRepositories: []})),
  createContext: jest.fn(),
}));

jest.mock('react-native', () => ({
  Keyboard: {
    dismiss: jest.fn(),
  },
}));

type SutTypes = {
  sut: SearchViewController;
  searchGithubRepositoryUsecaseSpy: SearchGithubRepositoryUsecaseSpy;
};

function makeSut(): SutTypes {
  const searchGithubRepositoryUsecaseSpy = new SearchGithubRepositoryUsecaseSpy();
  const sut = new SearchViewController(searchGithubRepositoryUsecaseSpy);

  return {
    sut,
    searchGithubRepositoryUsecaseSpy,
  };
}

describe('Search View Controller', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('saveRepoToObserver()', async () => {
    const {sut, searchGithubRepositoryUsecaseSpy} = makeSut();
    jest.spyOn(searchGithubRepositoryUsecaseSpy, 'search');

    await sut.searchRepository();

    expect(searchGithubRepositoryUsecaseSpy.search).toHaveBeenCalledTimes(1);
  });

  it('Should Throw Error if SearchGithubRepositoryUsecase throws', async () => {
    const {sut, searchGithubRepositoryUsecaseSpy} = makeSut();
    jest.spyOn(searchGithubRepositoryUsecaseSpy, 'search').mockRejectedValueOnce(new Error());

    const result = sut.searchRepository();

    expect(result).rejects.toThrow(new Error());
  });

  it('Should Throw Error if repositoryName is empty', async () => {
    const {sut} = makeSut();
    sut.repositoryName.current = '';

    const result = sut.searchRepository();

    expect(result).rejects.toThrow(new Error());
  });
});
