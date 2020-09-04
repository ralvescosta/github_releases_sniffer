import React from 'react';
import {StatusBar} from 'react-native';
import {primary} from './core/themes/colors';
import {WarperSignInScreen} from './signin/signin_module';

const Main = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={primary} />
      <WarperSignInScreen />
    </>
  );
};
export default Main;
