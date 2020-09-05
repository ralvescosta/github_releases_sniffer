import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigation} from './presenter/stack.navigation';

import {SignInScreenModule} from '../signin/signin.module';
import {BottomTabNavigation} from './presenter/bottom.tab.navigation';

export const NavigationModule: React.FC = () => {
  return (
    <NavigationContainer>
      <StackNavigation isLogged signInScreen={SignInScreenModule} bottomTabNavigation={BottomTabNavigation} />
    </NavigationContainer>
  );
};
