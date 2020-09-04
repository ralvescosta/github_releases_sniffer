import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

const Stack = createStackNavigator();

type Props = {
  signInScreen: React.FC<any>;
  dashboardScreen: React.FC<any>;
};

export const AppNavigation: React.FC<Props> = ({
  signInScreen,
  dashboardScreen,
}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
        headerShown: false,
      }}>
      <Stack.Screen name="signin" component={signInScreen} />
      <Stack.Screen name="dashboard" component={dashboardScreen} />
    </Stack.Navigator>
  );
};
