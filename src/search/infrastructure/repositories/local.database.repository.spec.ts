import AsyncStorage from '@react-native-community/async-storage';
import {SniffedGithubRepositoryEntity} from '../../bussiness/entities/sniffed.github.repository.entity';
import {LocalDatabaseRepository} from './local.database.repository';

jest.mock('@react-native-community/async-storage', () => ({
  getItem: jest.fn(() => undefined),
  setItem: jest.fn(),
}));

type SutTypes = {
  sut: LocalDatabaseRepository;
  sniffedEntity: SniffedGithubRepositoryEntity;
};

function makeSut(): SutTypes {
  const sut = LocalDatabaseRepository.getInstance();
  const sniffedEntity = new SniffedGithubRepositoryEntity(1, '', '', 10, 10, 10, 1, '', '', '');
  return {
    sut,
    sniffedEntity,
  };
}

describe('Search Module - Local Database Repository', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('saveSniffed()', async () => {
    const {sut, sniffedEntity} = makeSut();

    await sut.saveSniffed(sniffedEntity);

    expect(AsyncStorage.getItem).toHaveBeenCalledTimes(1);
    expect(AsyncStorage.setItem).toHaveBeenCalledTimes(1);
  });

  it('update()', async () => {
    const {sut, sniffedEntity} = makeSut();

    await sut.update([sniffedEntity]);

    expect(AsyncStorage.setItem).toHaveBeenCalledTimes(1);
  });

  it('Should throw if AsyncStorage Throws on saveSniffed method', async () => {
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

  it('Should throw if AsyncStorage Throws on update method', async () => {
    const {sut, sniffedEntity} = makeSut();

    jest.spyOn(AsyncStorage, 'setItem').mockRejectedValueOnce(new Error());
    const result = sut.update([sniffedEntity]);
    expect(result).rejects.toThrow(new Error());
  });

  it('Should returns true if update successfully', async () => {
    const {sut, sniffedEntity} = makeSut();
    jest.spyOn(AsyncStorage, 'getItem').mockResolvedValueOnce(undefined as any);

    const result = await sut.update([sniffedEntity]);

    expect(result).toBeTruthy();
  });
});
