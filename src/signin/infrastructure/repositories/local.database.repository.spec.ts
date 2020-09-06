import AsyncStorage from '@react-native-community/async-storage';
import {LocalDatabaseRepository} from './local.database.repository';
import {GithubUserAccountEntity} from '../../bussiness/entities/github.account.entity';

jest.mock('@react-native-community/async-storage', () => ({
  setItem: jest.fn(),
}));

type SutTypes = {
  sut: LocalDatabaseRepository;
  userAccount: GithubUserAccountEntity;
};

function makeSut(): SutTypes {
  const userAccount = new GithubUserAccountEntity(1, 'login', 'avatar_url', 'name', 'bio', 10, 10, 10);
  const sut = new LocalDatabaseRepository();

  return {
    sut,
    userAccount,
  };
}

describe('Local Database Repository', () => {
  it('registerUser()', async () => {
    const {sut, userAccount} = makeSut();
    sut.registerUser(userAccount);

    expect(AsyncStorage.setItem).toHaveBeenCalledTimes(1);
  });

  it('Should return true if userAccount to be set on Local Storage', async () => {
    const {sut, userAccount} = makeSut();
    const result = await sut.registerUser(userAccount);

    expect(result).toBeTruthy();
  });

  it('Should throw error if AsyncStorage throws', async () => {
    const {sut, userAccount} = makeSut();

    jest.spyOn(AsyncStorage, 'setItem').mockRejectedValueOnce(new Error());
    const result = sut.registerUser(userAccount);

    await expect(result).rejects.toThrow(new Error());
  });
});
