import React from 'react';
import {SearchScreen} from './presenter/search.screen';

import {SearchGithubRepositoryUsecase} from './application/usecases/search.github.repository.usecase';
import {SearchViewController} from './interfaces/search.view.controller';

import {HttpClintGithubApiRepository} from './infrastructure/repositories/http.clint.github.api.repository';

import {RepoCard} from './presenter/components/repoCard';
import {RepoCardViewController} from './interfaces/repo.card.view.controller';
import {SaveRepositoryToSnifferUsecase} from './application/usecases/save.repositrory.to.sniffer.usecase';
import {RemoveRepositoryCheckedAsSnifferUsecase} from './application/usecases/remove.repository.checked.as.sniffer.usecase';
import {LocalDatabaseRepository} from './infrastructure/repositories/local.database.repository';

const RepositoryCardComponent = ({repository}: any) => {
  const viewController = new RepoCardViewController(
    repository,
    SaveRepositoryToSnifferUsecase.getInstance(LocalDatabaseRepository.getInstance(), HttpClintGithubApiRepository.getInstance()),
    RemoveRepositoryCheckedAsSnifferUsecase.getInstance(LocalDatabaseRepository.getInstance()),
  );

  return <RepoCard viewController={viewController} />;
};

export const SearchScreenModule = () => {
  const searchGithubRepositoryUsecase = new SearchGithubRepositoryUsecase(HttpClintGithubApiRepository.getInstance());

  const searchViewController = new SearchViewController(searchGithubRepositoryUsecase);

  return <SearchScreen viewController={searchViewController} RepoCard={RepositoryCardComponent} />;
};
