import {CheckUserIsLoggedUsecase} from './check.user.is.logged.usecase';
import {GetLocallyUserAccountRepositorySpy} from '../__test__/get.locally.user.account.repository';

type SutTypes = {
  sut: CheckUserIsLoggedUsecase;
  getLocallyUserAccountRepositorySpy: GetLocallyUserAccountRepositorySpy;
};

function makeSut(): SutTypes {
  const getLocallyUserAccountRepositorySpy = new GetLocallyUserAccountRepositorySpy();
  const sut = new CheckUserIsLoggedUsecase(getLocallyUserAccountRepositorySpy);

  return {
    sut,
    getLocallyUserAccountRepositorySpy,
  };
}

describe('Check User Is Logged Usecase', () => {
  it('check()', async () => {
    const {sut, getLocallyUserAccountRepositorySpy} = makeSut();
    jest.spyOn(getLocallyUserAccountRepositorySpy, 'getAccount');

    await sut.check();

    expect(getLocallyUserAccountRepositorySpy.getAccount).toHaveBeenCalledTimes(1);
  });

  it('Should return true if user already register locally', async () => {
    const {sut} = makeSut();

    const result = await sut.check();

    expect(result).toBeTruthy();
  });

  it('Should return false if user not register locally', async () => {
    const {sut, getLocallyUserAccountRepositorySpy} = makeSut();
    getLocallyUserAccountRepositorySpy.entity = undefined as any;

    const result = await sut.check();

    expect(result).toBeFalsy();
  });
});
