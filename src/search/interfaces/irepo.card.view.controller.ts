import React from 'react';
import {ResultSearchGithubRepositoryEntity} from '../bussiness/entities/result.search.github.repository.entity';

export interface IRepoCardViewController {
  repository: ResultSearchGithubRepositoryEntity;

  switchState: boolean;
  setSwitchState: React.Dispatch<React.SetStateAction<boolean>>;

  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;

  context: any;

  saveRepoToObserver: () => Promise<void>;
}
