import React from 'react';
import {StatusBar} from 'react-native';
import {primary} from './core/themes/colors';
import SignInScreen from './signin/presenter/signin.screen';

const Main = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={primary} />
      <SignInScreen />
    </>
  );
};
export default Main;
