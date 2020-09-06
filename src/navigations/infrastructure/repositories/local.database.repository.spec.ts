import AsyncStorage from '@react-native-community/async-storage';
import {LocalDatabaseRepository} from './local.database.repository';
import {GithubUserAccountEntity} from '../../bussiness/entities/github.account.entity';

jest.mock('@react-native-community/async-storage', () => ({
  getItem: jest.fn(),
}));

type SutTypes = {
  sut: LocalDatabaseRepository;
  entity: GithubUserAccountEntity;
};

function makeSut(): SutTypes {
  const sut = new LocalDatabaseRepository();
  const entity = new GithubUserAccountEntity(1, 'login', 'avatar_url', 'name', 'bio', 10, 10, 10);

  return {
    sut,
    entity,
  };
}

describe('Local Database Repository', () => {
  it('getAccount()', async () => {
    const {sut} = makeSut();

    await sut.getAccount();

    expect(AsyncStorage.getItem).toHaveBeenCalledTimes(1);
  });

  it('Should return GithubUserAccountEntity if exist', async () => {
    const {sut, entity} = makeSut();
    jest.spyOn(AsyncStorage, 'getItem').mockResolvedValueOnce(JSON.stringify(entity));

    const result = await sut.getAccount();

    expect(result).toEqual(entity);
  });

  it('Should return undefined if do not exist', async () => {
    const {sut} = makeSut();
    jest.spyOn(AsyncStorage, 'getItem').mockResolvedValueOnce('');

    const result = await sut.getAccount();

    expect(result).toEqual(undefined);
  });
});
