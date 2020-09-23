import React from 'react';
import {Dashboard} from './presenter/dashboard.screen';

import {DashboardViewController} from './interfaces/dashboard.view.controller';
import {GetSnifferReposAndAccountUsecase} from './application/usecases/get.sniffer.repos.and.account.usecase';
import {LocalDatabaseRepository} from './infrastructure/repositories/local.database.repository';

import {RepoCard} from './presenter/components/repoCard';
import {ModelSnifferDetails} from './presenter/components/modelSnifferDetails';

const WrapperModelSnifferDetails = ({repository, modalVisible, setModalVisible}: any) => {
  return <ModelSnifferDetails repository={repository} modalVisible={modalVisible} setModalVisible={setModalVisible} />;
};

const WrapperRepoCard = ({repository}: any) => {
  return <RepoCard repository={repository} ModelSnifferDetails={WrapperModelSnifferDetails} />;
};

export const DashboardModule = () => {
  const localDatabaseRepository = new LocalDatabaseRepository();
  const getSnifferReposAndAccountUsecase = new GetSnifferReposAndAccountUsecase(localDatabaseRepository);
  const dashboardViewController = new DashboardViewController(getSnifferReposAndAccountUsecase);

  return <Dashboard viewController={dashboardViewController} RepoCard={WrapperRepoCard} />;
};
