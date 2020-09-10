import {useState, useRef, useContext} from 'react';
import {Keyboard} from 'react-native';
import {ISearchGithubRepositoryUsecase} from '../bussiness/usecases/isearch.github.repository.usecase';
import {ResultSearchGithubRepositoryEntity} from '../bussiness/entities/result.search.github.repository.entity';
import AsyncStorage from '@react-native-community/async-storage';
import {Context} from '../../core/context/observed.repositories.context';

export class SearchViewController {
  public repositoryName: string;

  public isLoading: boolean;
  public setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;

  public foundRepositories: React.MutableRefObject<ResultSearchGithubRepositoryEntity[]>;

  public timer: any;

  public context = useContext(Context);

  constructor(private readonly searchRepositoryUsecase: ISearchGithubRepositoryUsecase) {
    this.repositoryName = '';
    [this.isLoading, this.setIsLoading] = useState<boolean>(false);
    this.foundRepositories = useRef<ResultSearchGithubRepositoryEntity[]>([]);
  }

  public setTimer(textInput: string) {
    clearTimeout(this.timer);
    this.repositoryName = textInput;
    this.timer = setTimeout(() => this.searchRepository(), 1000);
  }

  private async searchRepository() {
    this.setIsLoading(true);
    Keyboard.dismiss();

    const result = await this.searchRepositoryUsecase.search(this.repositoryName, this.context.observedRepositories);
    console.log('result');
    this.foundRepositories.current = result;

    this.setIsLoading(false);
  }

  public async saveRepoToObserver(repositoryId: number) {
    const getRepositorySelected = this.foundRepositories.current.find((item) => item.id === repositoryId);

    if (!getRepositorySelected) {
      console.log('ERRROU');
    }

    const newContext = [...this.context.observedRepositories, getRepositorySelected];

    await AsyncStorage.setItem('@observed', JSON.stringify(newContext));
    this.context.setObservedRepositories(newContext);
    console.log(getRepositorySelected);
  }
}
