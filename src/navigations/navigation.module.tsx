import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigation} from './presenter/stack.navigation';

import {CheckUserLoggedViewController} from './interfaces/check.user.logged.view.controller';
import {LocalDatabaseRepository} from './infrastructure/repositories/local.database.repository';
import {CheckUserIsLoggedUsecase} from './application/usecases/check.user.is.logged.usecase';

type Props = {
  viewController: CheckUserLoggedViewController;
};

export const NavigationModule: React.FC<Props> = ({viewController}) => {
  return (
    <NavigationContainer>
      {viewController.isLoading ? null : <StackNavigation isLogged={viewController.isLogged.current} />}
    </NavigationContainer>
  );
};

export const WarperNavigationModule: React.FC = () => {
  const localDatabaseRepository = new LocalDatabaseRepository();
  const checkUserIsLoggedUsecase = new CheckUserIsLoggedUsecase(localDatabaseRepository);
  const checkUserLoggedViewController = new CheckUserLoggedViewController(checkUserIsLoggedUsecase);

  return <NavigationModule viewController={checkUserLoggedViewController} />;
};
