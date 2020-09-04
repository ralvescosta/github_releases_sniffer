import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {primary} from './core/themes/colors';
import {AppNavigation} from './core/components/navigation';
import {WarperSignInScreen} from './signin/signin_module';
import {Dashboard} from './dashboard/presenter/dashboard.screen';

const Main = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={primary} />
      <NavigationContainer>
        <AppNavigation
          signInScreen={WarperSignInScreen}
          dashboardScreen={Dashboard}
        />
      </NavigationContainer>
    </>
  );
};
export default Main;
