import React from 'react';
import '@react-native-community/async-storage';
import {NavigationContainer} from '@react-navigation/native';

import {BottomTabNavigation} from './bottom.tab.navigation';
import {cleanup, render} from '@testing-library/react-native';

jest.mock('@react-native-community/async-storage', () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
}));
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

function makeSut() {
  return render(
    <NavigationContainer>
      <BottomTabNavigation />
    </NavigationContainer>,
  );
}

describe('Bottom Tab Navigation', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

  it('Should render correctly', () => {
    const sut = makeSut();
    expect(sut.toJSON()).toMatchSnapshot();
  });
});
