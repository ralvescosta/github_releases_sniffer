import 'react';
import {GetSnifferReposAndAccountUsecaseSpy} from '../__test__/get.sniffer.repos.and.account.usecase.spy';
import {DashboardViewController} from './dashboard.view.controller';

jest.mock('react', () => ({
  useRef: jest.fn(() => ({current: {value: 'some_thing'}})),
  useState: jest.fn(() => [[], jest.fn()]),
  useEffect: jest.fn(() => {}),
  useContext: jest.fn(() => ({setSniffedRepositories: jest.fn(), sniffedRepositories: []})),
  createContext: jest.fn(),
}));

function makeSut() {
  const getSnifferReposAndAccountUsecaseSpy = new GetSnifferReposAndAccountUsecaseSpy();
  const sut = new DashboardViewController(getSnifferReposAndAccountUsecaseSpy);

  return {
    sut,
    getSnifferReposAndAccountUsecaseSpy,
  };
}

describe('Dashboard View Controller', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('getSniffedReposAndAccountIntoCacheAndSetGlobalContext()', async () => {
    const {sut, getSnifferReposAndAccountUsecaseSpy} = makeSut();
    jest.spyOn(getSnifferReposAndAccountUsecaseSpy, 'get');

    await sut.getSniffedReposAndAccountIntoCacheAndSetGlobalContext();

    expect(getSnifferReposAndAccountUsecaseSpy.get).toHaveBeenCalledTimes(1);
  });
});
