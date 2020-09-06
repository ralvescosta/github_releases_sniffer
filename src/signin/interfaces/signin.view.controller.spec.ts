import 'react';
import '@react-navigation/native';

import {SingInViewController} from './signin.view.controller';
import {SignInUsecaseSpy} from './__test__/signIn.usecase.spy';

jest.mock('react', () => ({
  useRef: jest.fn(() => ({current: {value: 'some_thing'}})),
  useState: jest.fn(() => [[], jest.fn()]),
  useEffect: jest.fn(() => {}),
}));

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(() => ({
    navigate: jest.fn(),
  })),
}));

type SutTypes = {
  sut: SingInViewController;
  signInUsecaseSpy: SignInUsecaseSpy;
};

function makeSut(): SutTypes {
  const signInUsecaseSpy = new SignInUsecaseSpy();
  const sut = new SingInViewController(signInUsecaseSpy);

  return {
    sut,
    signInUsecaseSpy,
  };
}

describe('SingIn View Controller', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('onPressSignIn()', async () => {
    const {sut, signInUsecaseSpy} = makeSut();

    sut.inputValue = 'some';
    jest.spyOn(signInUsecaseSpy, 'signin').mockResolvedValueOnce({} as never);

    await sut.onPressSignIn();

    expect(signInUsecaseSpy.signin).toHaveBeenCalledTimes(1);
  });

  it('Should throw Error if inputValue is empty', async () => {
    const {sut} = makeSut();
    sut.inputValue = '';

    const result = sut.onPressSignIn();

    await expect(result).rejects.toThrow(new Error());
  });

  it('Should throw Error if signInUsecase throws', async () => {
    const {sut, signInUsecaseSpy} = makeSut();
    sut.inputValue = 'some';
    jest.spyOn(signInUsecaseSpy, 'signin').mockRejectedValueOnce(new Error());

    let result = sut.onPressSignIn();
    await expect(result).rejects.toThrow(new Error());
  });

  it('Should calls navigation if signin be success', async () => {
    const {sut} = makeSut();
    sut.inputValue = 'some';

    await sut.onPressSignIn();

    expect(sut.navigation.navigate).toHaveBeenCalledTimes(1);
    expect(sut.navigation.navigate).toHaveBeenCalledWith('dashboard');
  });
});
