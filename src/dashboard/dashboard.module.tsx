import React from 'react';
import {Dashboard} from './presenter/dashboard.screen';

import {DashboardViewController} from './interfaces/dashboard.view.controller';
import {GetSnifferReposAndAccountUsecase} from './application/usecases/get.sniffer.repos.and.account.usecase';
import {LocalDatabaseRepository} from './infrastructure/repositories/local.database.repository';

export const DashboardModule = () => {
  const localDatabaseRepository = new LocalDatabaseRepository();
  const getSnifferReposAndAccountUsecase = new GetSnifferReposAndAccountUsecase(localDatabaseRepository);
  const dashboardViewController = new DashboardViewController(getSnifferReposAndAccountUsecase);

  return <Dashboard viewController={dashboardViewController} />;
};
