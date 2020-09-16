import React from 'react';
import {cleanup, render, RenderAPI, fireEvent} from '@testing-library/react-native';

import {TextInput, TouchableOpacity, ActivityIndicator} from 'react-native';

import {SignInScreen} from './signin.screen';
import {SingInViewControllerSpy} from './__test__/signin.view.controller.spy';

type SutTypes = {
  sut: RenderAPI;
  singInViewControllerSpy: SingInViewControllerSpy;
};

function makeSut(): SutTypes {
  let singInViewControllerSpy: any;

  const SignInScreenWarper = () => {
    singInViewControllerSpy = new SingInViewControllerSpy();
    return <SignInScreen viewController={singInViewControllerSpy} />;
  };

  const sut = render(<SignInScreenWarper />);

  return {
    sut,
    singInViewControllerSpy,
  };
}

describe('SignIn Screen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

  it('Should render correctly', () => {
    const {sut} = makeSut();
    expect(sut.toJSON()).toMatchSnapshot();
  });

  it('Should render TextInput and TouchableOpacity', () => {
    const {sut} = makeSut();

    expect(sut.UNSAFE_getByType(TextInput).props.placeholder).toBe('Github user');
    expect(sut.UNSAFE_getByType(TouchableOpacity).props.testID).toBe('signin-button');
  });

  it('Should render ActivityIndicator into a TouchableOpacity if onPressed', () => {
    const {sut} = makeSut();

    sut.UNSAFE_getByType(TouchableOpacity).props.onPress();
    expect(sut.UNSAFE_getByType(ActivityIndicator).props.testID).toBe('signin-indicator');
  });

  it('Should ', () => {
    const {sut, singInViewControllerSpy} = makeSut();

    const textInput = sut.UNSAFE_getByType(TextInput);
    fireEvent.changeText(textInput, 'some_text');

    expect(singInViewControllerSpy.inputValue).toBe('some_text');
  });

  // it('Should render Alert if onPressSignIn throws', () => {
  //   const {sut, singInViewControllerSpy} = makeSut();
  //   singInViewControllerSpy.inputValue = '';

  //   sut.root.findByType(TouchableOpacity).props.onPress();
  // });
});
