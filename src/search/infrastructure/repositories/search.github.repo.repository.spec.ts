import fetch from 'jest-fetch-mock';
import {SearchGithubRepoRepository} from './search.github.repo.repository';
import {ResultSearchGithubRepositoryEntity} from '../../bussiness/entities/result.search.github.repository.entity';

import {MockResultGithubRepositorySearch} from '../__test__/mock';

fetch.enableMocks();

type SutTypes = {
  sut: SearchGithubRepoRepository;
};

function makeSut(): SutTypes {
  const sut = new SearchGithubRepoRepository();

  return {
    sut,
  };
}

describe('Search Github Repo Repository', () => {
  beforeEach(() => {
    fetch.resetMocks();
    jest.clearAllMocks();
  });

  it('search()', async () => {
    const {sut} = makeSut();
    fetch.mockResponseOnce(JSON.stringify(MockResultGithubRepositorySearch));

    await sut.search('some_repository');

    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('Should throw Error if statusCode >= 400', async () => {
    const {sut} = makeSut();
    fetch.mockResolvedValueOnce({status: 400} as never);

    const result = sut.search('some_repository');

    expect(result).rejects.toThrow(new Error());
  });

  it('Should throw Error if some error occur on fetch', async () => {
    const {sut} = makeSut();
    fetch.mockRejectedValueOnce(new Error());

    const result = sut.search('some_repository');

    expect(result).rejects.toThrow(new Error());
  });

  it('Should returns array of ResultSearchGithubRepositoryEntity if success', async () => {
    const {sut} = makeSut();
    fetch.mockResponseOnce(JSON.stringify(MockResultGithubRepositorySearch));

    const result = await sut.search('some_repository');

    expect(result[0]).toBeInstanceOf(ResultSearchGithubRepositoryEntity);
  });
});
