import React from 'react';
import {SearchScreen} from './presenter/search.screen';

import {SearchGithubRepoRepository} from './infrastructure/repositories/search.github.repo.repository';
import {SearchGithubRepositoryUsecase} from './application/usecases/search.github.repository.usecase';
import {SearchViewController} from './interfaces/search.view.controller';

import {RepoCard} from './presenter/components/repoCard';
import {RepoCardViewController} from './interfaces/repo.card.view.controller';

import {SaveRepositoryToSnifferUsecase} from './application/usecases/save.repositrory.to.sniffer.usecase';
import {SaveLocallySniffedRepository} from './infrastructure/repositories/save.locally.sniffed.repository';
import {GetLastSniffedReleaseRepository} from './infrastructure/repositories/get.last.sniffed.release.repository';

import {RemoveRepositoryCheckedAsSnifferUsecase} from './application/usecases/remove.repository.checked.as.sniffer.usecase';
import {UpdateLocallySniffedRepository} from './infrastructure/repositories/update.locally.sniffed.repository';

const RepositoryCardComponent = ({repository}: any) => {
  const viewController = new RepoCardViewController(
    repository,
    SaveRepositoryToSnifferUsecase.getInstance(SaveLocallySniffedRepository.getInstance(), GetLastSniffedReleaseRepository.getInstance()),
    RemoveRepositoryCheckedAsSnifferUsecase.getInstance(UpdateLocallySniffedRepository.getInstance()),
  );

  return <RepoCard viewController={viewController} />;
};

export const SearchScreenModule = () => {
  const searchGithubRepoRepository = new SearchGithubRepoRepository();
  const searchGithubRepositoryUsecase = new SearchGithubRepositoryUsecase(searchGithubRepoRepository);

  const searchViewController = new SearchViewController(searchGithubRepositoryUsecase);

  return <SearchScreen viewController={searchViewController} RepoCard={RepositoryCardComponent} />;
};
