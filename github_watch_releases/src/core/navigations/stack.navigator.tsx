import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

const Stack = createStackNavigator();

type Props = {
  signInScreen: React.FC<any>;
};

const StackNavigation: React.FC<Props> = ({signInScreen}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen name="signin" component={signInScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
