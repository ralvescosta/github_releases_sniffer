import AsyncStorage from '@react-native-community/async-storage';
import {SniffedGithubRepositoryEntity} from '../../bussiness/entities/sniffed.github.repository.entity';
import {SaveLocallySniffedRepository} from './save.locally.sniffed.repository';

jest.mock('@react-native-community/async-storage', () => ({
  getItem: jest.fn(() => undefined),
  setItem: jest.fn(),
}));

type SutTypes = {
  sut: SaveLocallySniffedRepository;
  sniffedEntity: SniffedGithubRepositoryEntity;
};

function makeSut(): SutTypes {
  const sut = SaveLocallySniffedRepository.getInstance();
  const sniffedEntity = new SniffedGithubRepositoryEntity(1, '', '', 10, 10, 10, 1, '', '', '');
  return {
    sut,
    sniffedEntity,
  };
}

describe('Save Locally Sniffed Repository', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('saveSniffed()', async () => {
    const {sut, sniffedEntity} = makeSut();

    await sut.saveSniffed(sniffedEntity);

    expect(AsyncStorage.getItem).toHaveBeenCalledTimes(1);
    expect(AsyncStorage.setItem).toHaveBeenCalledTimes(1);
  });

  it('Should throw if AsyncStorage Throws', async () => {
    const {sut, sniffedEntity} = makeSut();

    jest.spyOn(AsyncStorage, 'getItem').mockRejectedValueOnce(new Error());
    let result = sut.saveSniffed(sniffedEntity);
    expect(result).rejects.toThrow(new Error());

    jest.spyOn(AsyncStorage, 'getItem').mockResolvedValueOnce(undefined as any);
    jest.spyOn(AsyncStorage, 'setItem').mockRejectedValueOnce(new Error());
    result = sut.saveSniffed(sniffedEntity);
    expect(result).rejects.toThrow(new Error());
  });

  it('Should push into sniffedSavedJSON if getItem return undefined', async () => {
    const {sut, sniffedEntity} = makeSut();
    jest.spyOn(AsyncStorage, 'getItem').mockResolvedValueOnce(undefined as any);

    const result = await sut.saveSniffed(sniffedEntity);

    expect(result).toBeTruthy();
  });

  it('Should push into sniffedSavedJSON if getItem return some values', async () => {
    const {sut, sniffedEntity} = makeSut();
    jest.spyOn(AsyncStorage, 'getItem').mockResolvedValueOnce(JSON.stringify([sniffedEntity]));

    const result = await sut.saveSniffed(sniffedEntity);

    expect(result).toBeTruthy();
  });
});
