import React, {useState, useLayoutEffect} from 'react';
import {StatusBar, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {primary} from './core/themes/colors';
import {AppNavigation} from './core/components/navigation';
import {WarperSignInScreen} from './signin/signin_module';
import {Dashboard} from './dashboard/presenter/dashboard.screen';
import AsyncStorage from '@react-native-community/async-storage';

const Main = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [isLoading, setLoading] = useState(true);

  async function getAccount(): Promise<void> {
    const account = await AsyncStorage.getItem('@account');
    if (account) {
      setIsLogged(true);
      setLoading(false);
    }
  }

  useLayoutEffect(() => {
    getAccount();
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={primary} />
      {isLoading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <NavigationContainer>
          {console.log(isLogged)}
          <AppNavigation isLogged={isLogged} signInScreen={WarperSignInScreen} dashboardScreen={Dashboard} />
        </NavigationContainer>
      )}
    </>
  );
};
export default Main;
