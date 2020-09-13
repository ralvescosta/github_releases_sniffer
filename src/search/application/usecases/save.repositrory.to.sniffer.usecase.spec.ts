import {SaveRepositoryToSnifferUsecase} from './save.repositrory.to.sniffer.usecase';
import {SaveLocallySniffedRepositorySpy} from '../__test__/save.locally.sniffed.repository.spy';
import {GetLastSniffedReleaseRepositorySpy} from '../__test__/get.last.sniffed.release.repository.spy';

type SutTypes = {
  sut: SaveRepositoryToSnifferUsecase;
  locallySniffedRepositorySpy: SaveLocallySniffedRepositorySpy;
  getLastSniffedReleaseRepositorySpy: GetLastSniffedReleaseRepositorySpy;
};

function makeSut(): SutTypes {
  const locallySniffedRepositorySpy = new SaveLocallySniffedRepositorySpy();
  const getLastSniffedReleaseRepositorySpy = new GetLastSniffedReleaseRepositorySpy();
  const sut = new SaveRepositoryToSnifferUsecase(locallySniffedRepositorySpy, getLastSniffedReleaseRepositorySpy);

  return {
    sut,
    locallySniffedRepositorySpy,
    getLastSniffedReleaseRepositorySpy,
  };
}

describe('Save Repository To Sniffer Usecase', () => {
  it('saveToSniffer()', async () => {
    const {sut, locallySniffedRepositorySpy, getLastSniffedReleaseRepositorySpy} = makeSut();
    jest.spyOn(getLastSniffedReleaseRepositorySpy, 'get').mockResolvedValueOnce({tagName: 'v'});
    jest.spyOn(locallySniffedRepositorySpy, 'saveSniffed').mockResolvedValueOnce(true);

    await sut.saveToSniffer(locallySniffedRepositorySpy.resultSearchEntity);

    expect(getLastSniffedReleaseRepositorySpy.get).toHaveBeenCalledTimes(1);
    expect(locallySniffedRepositorySpy.saveSniffed).toHaveBeenCalledTimes(1);
  });

  it('Should throw some Error if GetLastSniffedReleaseRepository Throws', async () => {
    const {sut, locallySniffedRepositorySpy, getLastSniffedReleaseRepositorySpy} = makeSut();
    jest.spyOn(getLastSniffedReleaseRepositorySpy, 'get').mockRejectedValueOnce(new Error());

    const result = sut.saveToSniffer(locallySniffedRepositorySpy.resultSearchEntity);

    await expect(result).rejects.toThrow(new Error());
  });

  it('Should throw some Error if SaveLocallySniffedRepository Throws', async () => {
    const {sut, locallySniffedRepositorySpy, getLastSniffedReleaseRepositorySpy} = makeSut();
    jest.spyOn(getLastSniffedReleaseRepositorySpy, 'get').mockResolvedValueOnce({tagName: 'v'});
    jest.spyOn(locallySniffedRepositorySpy, 'saveSniffed').mockRejectedValueOnce(new Error());

    const result = sut.saveToSniffer(locallySniffedRepositorySpy.resultSearchEntity);

    await expect(result).rejects.toThrow(new Error());
  });

  it('Should return true if saveToSniffer executed successfully', async () => {
    const {sut, locallySniffedRepositorySpy, getLastSniffedReleaseRepositorySpy} = makeSut();
    jest.spyOn(getLastSniffedReleaseRepositorySpy, 'get').mockResolvedValueOnce({tagName: 'v'});
    jest.spyOn(locallySniffedRepositorySpy, 'saveSniffed').mockResolvedValueOnce(true);

    const result = await sut.saveToSniffer(locallySniffedRepositorySpy.resultSearchEntity);

    expect(result).toBeTruthy();
  });
});
