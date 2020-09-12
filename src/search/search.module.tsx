import React from 'react';
import {SearchScreen} from './presenter/search.screen';

import {SearchGithubRepoRepository} from './infrastructure/repositories/search.github.repo.repository';
import {SearchGithubRepositoryUsecase} from './application/usecases/search.github.repository.usecase';
import {SearchViewController} from './interfaces/search.view.controller';

export const SearchScreenModule: React.FC = () => {
  const searchGithubRepositoryUsecase = new SearchGithubRepositoryUsecase(SearchGithubRepoRepository.getInstance());

  const searchViewController = new SearchViewController(searchGithubRepositoryUsecase);

  return <SearchScreen viewController={searchViewController} />;
};
