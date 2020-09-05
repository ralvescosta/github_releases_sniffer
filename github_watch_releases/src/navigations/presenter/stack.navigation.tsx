import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

const Stack = createStackNavigator();

type Props = {
  isLogged: boolean;
  signInScreen: React.FC<any>;
  bottomTabNavigation: any;
};

export const StackNavigation: React.FC<Props> = ({isLogged = false, signInScreen, bottomTabNavigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
        headerShown: false,
      }}
      initialRouteName={isLogged ? 'dashboard' : 'signin'}>
      <Stack.Screen name="signin" component={signInScreen} />
      <Stack.Screen name="dashboard" component={bottomTabNavigation} />
    </Stack.Navigator>
  );
};
