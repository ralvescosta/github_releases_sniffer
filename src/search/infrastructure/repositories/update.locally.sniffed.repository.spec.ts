import AsyncStorage from '@react-native-community/async-storage';
import {SniffedGithubRepositoryEntity} from '../../bussiness/entities/sniffed.github.repository.entity';
import {UpdateLocallySniffedRepository} from './update.locally.sniffed.repository';

jest.mock('@react-native-community/async-storage', () => ({
  getItem: jest.fn(() => undefined),
  setItem: jest.fn(),
}));

type SutTypes = {
  sut: UpdateLocallySniffedRepository;
  sniffedEntity: SniffedGithubRepositoryEntity;
};

function makeSut(): SutTypes {
  const sut = UpdateLocallySniffedRepository.getInstance();
  const sniffedEntity = new SniffedGithubRepositoryEntity(1, '', '', 10, 10, 10, 1, '', '', '');
  return {
    sut,
    sniffedEntity,
  };
}

describe('Update Locally Sniffed Repository', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('update()', async () => {
    const {sut, sniffedEntity} = makeSut();

    await sut.update([sniffedEntity]);

    expect(AsyncStorage.setItem).toHaveBeenCalledTimes(1);
  });

  it('Should throw if AsyncStorage Throws', async () => {
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
