import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigation} from './presenter/stack.navigation';

import {CheckUserLoggedViewController} from './interfaces/check.user.logged.view.controller';
import {LocalDatabaseRepository} from './infrastructure/repositories/local.database.repository';
import {CheckUserIsLoggedUsecase} from './application/usecases/check.user.is.logged.usecase';

import {GlobalContextProvider} from '../core/context/sniffed.repositories.context';

type Props = {
  viewController: CheckUserLoggedViewController;
};

export const NavigationModule = ({viewController}: Props) => {
  return (
    <NavigationContainer>
      {viewController.isLoading ? null : (
        <GlobalContextProvider>
          <StackNavigation isLogged={viewController.isUserLogged.current} />
        </GlobalContextProvider>
      )}
    </NavigationContainer>
  );
};

export const WarperNavigationModule = () => {
  const localDatabaseRepository = new LocalDatabaseRepository();
  const checkUserIsLoggedUsecase = new CheckUserIsLoggedUsecase(localDatabaseRepository);
  const checkUserLoggedViewController = new CheckUserLoggedViewController(checkUserIsLoggedUsecase);

  return <NavigationModule viewController={checkUserLoggedViewController} />;
};
