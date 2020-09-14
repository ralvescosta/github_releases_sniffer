import React from 'react';
import {SearchScreen} from './presenter/search.screen';

import {SearchGithubRepoRepository} from './infrastructure/repositories/search.github.repo.repository';
import {SearchGithubRepositoryUsecase} from './application/usecases/search.github.repository.usecase';
import {SearchViewController} from './interfaces/search.view.controller';

import {RepoCard} from './presenter/components/repoCard';
import {SaveRepositoryToSnifferUsecase} from './application/usecases/save.repositrory.to.sniffer.usecase';
import {SaveLocallySniffedRepository} from './infrastructure/repositories/save.locally.sniffed.repository';
import {GetLastSniffedReleaseRepository} from './infrastructure/repositories/get.last.sniffed.release.repository';
import {RepoCardViewController} from './interfaces/repo.card.view.controller';

const RepositoryCardComponent = ({repository}: any) => {
  const saveRepositoryToSnifferUsecase = new SaveRepositoryToSnifferUsecase(
    SaveLocallySniffedRepository.getInstance(),
    GetLastSniffedReleaseRepository.getInstance(),
  );
  const viewController = new RepoCardViewController(repository, saveRepositoryToSnifferUsecase);

  return <RepoCard viewController={viewController} />;
};

export const SearchScreenModule = () => {
  const searchGithubRepoRepository = new SearchGithubRepoRepository();
  const searchGithubRepositoryUsecase = new SearchGithubRepositoryUsecase(searchGithubRepoRepository);

  const searchViewController = new SearchViewController(searchGithubRepositoryUsecase);

  return <SearchScreen viewController={searchViewController} RepoCard={RepositoryCardComponent} />;
};
