import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

const Stack = createStackNavigator();

import {SignInScreenModule} from '../../signin/signin.module';
import {BottomTabNavigation} from './bottom.tab.navigation';

type Props = {
  isLogged: boolean;
};

export const StackNavigation: React.FC<Props> = ({isLogged = false}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
        headerShown: false,
      }}
      initialRouteName={isLogged ? 'dashboard' : 'signin'}>
      <Stack.Screen name="signin" component={SignInScreenModule} />
      <Stack.Screen name="dashboard" component={BottomTabNavigation} />
    </Stack.Navigator>
  );
};
