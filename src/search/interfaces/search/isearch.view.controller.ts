import React from 'react';
import {ResultSearchGithubRepositoryEntity} from '../../bussiness/entities/result.search.github.repository.entity';

export interface ISearchViewController {
  repositoryName: React.MutableRefObject<string>;

  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;

  foundRepositories: React.MutableRefObject<ResultSearchGithubRepositoryEntity[]>;

  context: any;

  searchRepository: () => Promise<void>;
}
