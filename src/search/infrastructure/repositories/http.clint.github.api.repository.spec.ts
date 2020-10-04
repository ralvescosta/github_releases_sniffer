import fetch from 'jest-fetch-mock';
import {HttpClintGithubApiRepository} from './http.clint.github.api.repository';
import {MockResultGithubRepositoryReleases, MockResultGithubRepositorySearch} from '../__test__/mock';
import {ResultSearchGithubRepositoryEntity} from '../../bussiness/entities/result.search.github.repository.entity';

fetch.enableMocks();

type SutTypes = {
  sut: HttpClintGithubApiRepository;
  MockReleaseURL: string;
};

function makeSut(): SutTypes {
  const sut = HttpClintGithubApiRepository.getInstance();
  const MockReleaseURL = 'https://api.github.com/repos/facebook/react/releases/lastet';

  return {
    sut,
    MockReleaseURL,
  };
}

describe('Search Module - Http Clint Github Api Repository', () => {
  beforeEach(() => {
    fetch.resetMocks();
    jest.clearAllMocks();
  });

  it('get()', async () => {
    const {sut, MockReleaseURL} = makeSut();

    sut.get(MockReleaseURL);

    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('search()', async () => {
    const {sut} = makeSut();
    fetch.mockResponseOnce(JSON.stringify(MockResultGithubRepositorySearch));

    await sut.search('some_repository');

    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('Should get method throw Error if statusCode >= 400', async () => {
    const {sut, MockReleaseURL} = makeSut();
    fetch.mockResolvedValueOnce({status: 400} as never);

    const result = sut.get(MockReleaseURL);

    expect(result).rejects.toThrow(new Error());
  });

  it('Should get method throw Error if some error occur on fetch', async () => {
    const {sut, MockReleaseURL} = makeSut();
    fetch.mockRejectedValueOnce(new Error());

    const result = sut.get(MockReleaseURL);

    expect(result).rejects.toThrow(new Error());
  });

  it('Should get method throw Error if Body is empty', async () => {
    const {sut, MockReleaseURL} = makeSut();
    fetch.mockResponseOnce(JSON.stringify([]) as any);

    const result = sut.get(MockReleaseURL);

    expect(result).rejects.toThrow(new Error('404'));
  });

  it('Should get method returns tagName if success', async () => {
    const {sut, MockReleaseURL} = makeSut();
    fetch.mockResponseOnce(JSON.stringify(MockResultGithubRepositoryReleases) as any);

    const result = await sut.get(MockReleaseURL);

    expect(result).toHaveProperty('tagName');
  });

  it('Should search method throw Error if statusCode >= 400', async () => {
    const {sut} = makeSut();
    fetch.mockResolvedValueOnce({status: 400} as never);

    const result = sut.search('some_repository');

    expect(result).rejects.toThrow(new Error());
  });

  it('Should search method throw Error if some error occur on fetch', async () => {
    const {sut} = makeSut();
    fetch.mockRejectedValueOnce(new Error());

    const result = sut.search('some_repository');

    expect(result).rejects.toThrow(new Error());
  });

  it('Should search method returns array of ResultSearchGithubRepositoryEntity if success', async () => {
    const {sut} = makeSut();
    fetch.mockResponseOnce(JSON.stringify(MockResultGithubRepositorySearch));

    const result = await sut.search('some_repository');

    expect(result[0]).toBeInstanceOf(ResultSearchGithubRepositoryEntity);
  });
});
