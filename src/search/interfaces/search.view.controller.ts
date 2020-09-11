import {useState, useRef, useContext} from 'react';
import {Keyboard} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import {ISearchGithubRepositoryUsecase} from '../bussiness/usecases/isearch.github.repository.usecase';
import {ResultSearchGithubRepositoryEntity} from '../bussiness/entities/result.search.github.repository.entity';
import {ISearchViewController} from './isearch.view.controller';

import {SniffedRepositoriesContext} from '../../core/context/sniffed.repositories.context';

export class SearchViewController implements ISearchViewController {
  public repositoryName: React.MutableRefObject<string>;

  public isLoading: boolean;
  public setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;

  public foundRepositories: React.MutableRefObject<ResultSearchGithubRepositoryEntity[]>;

  public timer: any;

  public context = useContext(SniffedRepositoriesContext);

  constructor(private readonly searchRepositoryUsecase: ISearchGithubRepositoryUsecase) {
    this.repositoryName = useRef('');
    [this.isLoading, this.setIsLoading] = useState<boolean>(false);
    this.foundRepositories = useRef<ResultSearchGithubRepositoryEntity[]>([]);
  }

  public async searchRepository(): Promise<void> {
    if (!this.repositoryName.current) {
      return;
    }

    this.setIsLoading(true);
    Keyboard.dismiss();

    const result = await this.searchRepositoryUsecase.search(this.repositoryName.current, this.context.sniffedRepositories);
    this.foundRepositories.current = result;

    this.setIsLoading(false);
  }

  public async saveRepoToObserver(repositoryId: number) {
    const getRepositorySelected = this.foundRepositories.current.find((item) => item.id === repositoryId);

    if (!getRepositorySelected) {
      console.log('ERRROU');
    }

    const newContext = [...this.context.sniffedRepositories, getRepositorySelected];

    await AsyncStorage.setItem('@sniffed', JSON.stringify(newContext));
    this.context.setSniffedRepositories(newContext);
    console.log(getRepositorySelected);
  }
}
