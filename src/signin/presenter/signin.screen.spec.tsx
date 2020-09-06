import React from 'react';
import {create, ReactTestRenderer} from 'react-test-renderer';

import {TextInput, TouchableOpacity, ActivityIndicator} from 'react-native';

import {SignInScreen} from './signin.screen';
import {SingInViewControllerSpy} from './__test__/signin.view.controller.spy';

type SutTypes = {
  sut: ReactTestRenderer;
  singInViewControllerSpy: SingInViewControllerSpy;
};

function makeSut(): SutTypes {
  let singInViewControllerSpy: any;

  const SignInScreenWarper: React.FC = () => {
    singInViewControllerSpy = new SingInViewControllerSpy();
    return <SignInScreen viewController={singInViewControllerSpy} />;
  };

  const sut = create(<SignInScreenWarper />);

  return {
    sut,
    singInViewControllerSpy,
  };
}

describe('SignIn Screen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Should render correctly', () => {
    const {sut} = makeSut();
    expect(sut.toJSON()).toMatchSnapshot();
  });

  it('Should render TextInput and TouchableOpacity', () => {
    const {sut} = makeSut();

    expect(sut.root.findByType(TextInput).props.placeholder).toBe('Github user');
    expect(sut.root.findByType(TouchableOpacity).props.testID).toBe('signin-button');
  });

  it('Should render ActivityIndicator into a TouchableOpacity if onPressed', () => {
    const {sut} = makeSut();

    sut.root.findByType(TouchableOpacity).props.onPress();
    expect(sut.root.findByType(ActivityIndicator).props.testID).toBe('signin-indicator');
  });

  // it('Should render Alert if onPressSignIn throws', () => {
  //   const {sut, singInViewControllerSpy} = makeSut();
  //   singInViewControllerSpy.inputValue = '';

  //   sut.root.findByType(TouchableOpacity).props.onPress();
  // });
});
