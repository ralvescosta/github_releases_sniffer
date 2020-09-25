import React from 'react';
import {Dashboard} from './presenter/dashboard.screen';

import {DashboardViewController} from './interfaces/dashboard/dashboard.view.controller';

import {GetSnifferReposAndAccountUsecase} from './application/usecases/get.sniffer.repos.and.account.usecase';
import {LocalDatabaseRepository} from './infrastructure/repositories/local.database.repository';

import {RepoCard} from './presenter/components/repoCard';
import {RepoCardViewController} from './interfaces/repoCard/repo.card.view.controller';

import {ModelSnifferDetails} from './presenter/components/modelSnifferDetails';
import {ModalSnifferDetailsViewController} from './interfaces/modalSnifferDetails/modal.sniffer.details.view.controller';

const WrapperModelSnifferDetails = ({repository, modalControl, setModalControl}: any) => {
  const modalSnifferDetailsViewController = new ModalSnifferDetailsViewController(modalControl, setModalControl);
  return <ModelSnifferDetails repository={repository} viewController={modalSnifferDetailsViewController} />;
};

const WrapperRepoCard = ({repository}: any) => {
  const repoCardViewController = new RepoCardViewController();
  return <RepoCard repository={repository} ModelSnifferDetails={WrapperModelSnifferDetails} viewController={repoCardViewController} />;
};

export const DashboardModule = () => {
  const localDatabaseRepository = new LocalDatabaseRepository();
  const getSnifferReposAndAccountUsecase = new GetSnifferReposAndAccountUsecase(localDatabaseRepository);
  const dashboardViewController = new DashboardViewController(getSnifferReposAndAccountUsecase);

  return <Dashboard viewController={dashboardViewController} RepoCard={WrapperRepoCard} />;
};
