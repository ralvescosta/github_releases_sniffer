import React from 'react';
import {SearchScreen} from './presenter/search.screen';

import {SearchGithubRepoRepository} from './infrastructure/repositories/search.github.repo.repository';
import {SearchGithubRepositoryUsecase} from './application/usecases/search.github.repository.usecase';
import {SearchViewController} from './interfaces/search.view.controller';

import {SaveRepositoryToSnifferUsecase} from './application/usecases/save.repositrory.to.sniffer.usecase';
import {SaveLocallySniffedRepository} from './infrastructure/repositories/save.locally.sniffed.repository';
import {GetLastSniffedReleaseRepository} from './infrastructure/repositories/get.last.sniffed.release.repository';

export const SearchScreenModule: React.FC = () => {
  const searchGithubRepoRepository = new SearchGithubRepoRepository();
  const searchGithubRepositoryUsecase = new SearchGithubRepositoryUsecase(searchGithubRepoRepository);

  const saveLocallySniffedRepository = new SaveLocallySniffedRepository();
  const getLastSniffedReleaseRepository = new GetLastSniffedReleaseRepository();
  const saveRepositoryToSnifferUsecase = new SaveRepositoryToSnifferUsecase(saveLocallySniffedRepository, getLastSniffedReleaseRepository);
  const searchViewController = new SearchViewController(searchGithubRepositoryUsecase, saveRepositoryToSnifferUsecase);

  return <SearchScreen viewController={searchViewController} />;
};
