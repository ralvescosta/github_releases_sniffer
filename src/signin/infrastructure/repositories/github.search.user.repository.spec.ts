import fetch from 'jest-fetch-mock';
import {GithubSearchUserRepository} from './github.search.user.repository';
import {GithubUserAccountEntity} from '../../bussiness/entities/github.account.entity';

type SutTypes = {
  sut: GithubSearchUserRepository;
  entity: GithubUserAccountEntity;
};

function makeSut(): SutTypes {
  const sut = new GithubSearchUserRepository();
  const entity = new GithubUserAccountEntity(1, 'login', 'avatar_url', 'name', 'bio', 10, 10, 10);

  return {
    sut,
    entity,
  };
}

fetch.enableMocks();

describe('Github Search User Repository', () => {
  beforeEach(() => {
    fetch.resetMocks();
    jest.clearAllMocks();
  });

  it('search()', async () => {
    const {sut, entity} = makeSut();
    fetch.mockResponseOnce(JSON.stringify(entity) as never);

    await sut.search('some_user');

    expect(fetch).toBeCalledTimes(1);
  });

  it('Should return GithubUserAccountEntity instance if user has be find', async () => {
    const {sut, entity} = makeSut();
    fetch.mockResponseOnce(JSON.stringify(entity) as never);

    const result = await sut.search('some_user');

    expect(result).toBeInstanceOf(GithubUserAccountEntity);
  });

  it('Should throw Error if fetch return status => 400', async () => {
    const {sut} = makeSut();
    fetch.mockResolvedValueOnce({status: 404} as never);

    const result = sut.search('some_user');

    await expect(result).rejects.toThrow(new Error());
  });

  it('Should throw Error if any Error occur in fetch ', async () => {
    const {sut} = makeSut();
    fetch.mockRejectedValueOnce(new Error());

    const result = sut.search('some_user');

    await expect(result).rejects.toThrow(new Error());
  });
});
