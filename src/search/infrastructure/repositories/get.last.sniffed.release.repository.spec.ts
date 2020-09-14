import fetch from 'jest-fetch-mock';
import {GetLastSniffedReleaseRepository} from './get.last.sniffed.release.repository';
import {MockResultGithubRepositoryReleases} from '../__test__/mock';

fetch.enableMocks();

type SutTypes = {
  sut: GetLastSniffedReleaseRepository;
  MockReleaseURL: string;
};

function makeSut(): SutTypes {
  const sut = GetLastSniffedReleaseRepository.getInstance();
  const MockReleaseURL = 'https://api.github.com/repos/facebook/react/releases';

  return {
    sut,
    MockReleaseURL,
  };
}

describe('Get Last Sniffed Release Repository', () => {
  beforeEach(() => {
    fetch.resetMocks();
    jest.clearAllMocks();
  });

  it('get()', async () => {
    const {sut, MockReleaseURL} = makeSut();

    sut.get(MockReleaseURL);

    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('Should throw Error if statusCode >= 400', async () => {
    const {sut, MockReleaseURL} = makeSut();
    fetch.mockResolvedValueOnce({status: 400} as never);

    const result = sut.get(MockReleaseURL);

    expect(result).rejects.toThrow(new Error());
  });

  it('Should throw Error if some error occur on fetch', async () => {
    const {sut, MockReleaseURL} = makeSut();
    fetch.mockRejectedValueOnce(new Error());

    const result = sut.get(MockReleaseURL);

    expect(result).rejects.toThrow(new Error());
  });

  it('Should returns tagName if success', async () => {
    const {sut, MockReleaseURL} = makeSut();
    fetch.mockResponseOnce(JSON.stringify(MockResultGithubRepositoryReleases) as any);

    const result = await sut.get(MockReleaseURL);

    expect(result).toHaveProperty('tagName');
  });
});
