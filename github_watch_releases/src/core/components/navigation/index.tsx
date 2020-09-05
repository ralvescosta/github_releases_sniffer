import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

const Stack = createStackNavigator();

type Props = {
  isLogged: boolean;
  signInScreen: React.FC<any>;
  dashboardScreen: React.FC<any>;
};

import {BottomTabNavigation} from './bottom.tab.navigation';

export const AppNavigation: React.FC<Props> = ({isLogged = false, signInScreen}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
        headerShown: false,
      }}
      initialRouteName={isLogged ? 'dashboard' : 'signin'}>
      <Stack.Screen name="signin" component={signInScreen} />
      <Stack.Screen name="dashboard" component={BottomTabNavigation} />
    </Stack.Navigator>
  );
};
