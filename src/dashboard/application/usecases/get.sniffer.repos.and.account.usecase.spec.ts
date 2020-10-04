import {GetSnifferReposAndAccountUsecase} from './get.sniffer.repos.and.account.usecase';
import {GetAccountAndSnifferRepositorySpy} from '../__test__/iget.account.and.sniffer.repository.spy';

function makeSut() {
  const getAccountAndSnifferRepositorySpy = new GetAccountAndSnifferRepositorySpy();
  const sut = new GetSnifferReposAndAccountUsecase(getAccountAndSnifferRepositorySpy);

  return {
    sut,
    getAccountAndSnifferRepositorySpy,
  };
}

describe('Get Sniffer Repos And Account Usecase', () => {
  it('get()', async () => {
    const {sut, getAccountAndSnifferRepositorySpy} = makeSut();

    jest.spyOn(getAccountAndSnifferRepositorySpy, 'getUserAccountAndSniffer');

    await sut.get();

    expect(getAccountAndSnifferRepositorySpy.getUserAccountAndSniffer).toHaveBeenCalledTimes(1);
  });
});
