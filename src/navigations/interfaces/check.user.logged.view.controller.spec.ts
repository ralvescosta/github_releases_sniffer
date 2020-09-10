import 'react';
import {CheckUserLoggedViewController} from './check.user.logged.view.controller';
import {CheckUserIsLoggedUsecaseSpy} from './__test__/check.user.is.logged.usecase.spy';

jest.mock('react', () => ({
  useRef: jest.fn(() => ({current: false})),
  useState: jest.fn(() => [[], jest.fn()]),
  useEffect: jest.fn(() => {}),
}));

type SutTypes = {
  sut: CheckUserLoggedViewController;
  checkUserIsLoggedUsecaseSpy: CheckUserIsLoggedUsecaseSpy;
};

function makeSut(isLogged = true): SutTypes {
  const checkUserIsLoggedUsecaseSpy = new CheckUserIsLoggedUsecaseSpy(isLogged);
  const sut = new CheckUserLoggedViewController(checkUserIsLoggedUsecaseSpy);

  return {
    sut,
    checkUserIsLoggedUsecaseSpy,
  };
}

describe('Check User Logged View Controller', () => {
  it('Should isLogged.current must be true if checkUserIsLoggedUseCase returns true', async () => {
    const {sut} = makeSut();
    sut.isUserLogged.current = true;
    expect(sut.isUserLogged.current).toBeTruthy();
  });

  it('Should isLogged.current must be false if checkUserIsLoggedUseCase returns false', async () => {
    const {sut} = makeSut(false);

    expect(sut.isUserLogged.current).toBeFalsy();
  });
});
