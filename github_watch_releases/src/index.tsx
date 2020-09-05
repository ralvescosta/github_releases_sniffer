import React from 'react';
import {StatusBar} from 'react-native';
import {primary} from './core/themes/colors';
import {NavigationModule} from './navigations/navigation.module';

const Main = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={primary} />
      <NavigationModule />
    </>
  );
};
export default Main;
