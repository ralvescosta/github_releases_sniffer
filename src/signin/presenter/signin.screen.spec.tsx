import React from 'react';
import {mount, ReactWrapper} from 'enzyme';

import {SignInScreen} from './signin.screen';

type SutTypes = {
  sut: ReactWrapper;
};

function makeSut(): SutTypes {
  const sut = mount(<SignInScreen />);

  return {
    sut,
  };
}

describe('SignIn Screen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Should render correctly', () => {
    const {sut} = makeSut();

    expect(sut).toMatchSnapshot('SingIn Screen to Default Elements');
  });
});
