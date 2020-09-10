import {useState, useRef} from 'react';
import {Keyboard} from 'react-native';
import {ISearchGithubRepositoryUsecase} from '../bussiness/usecases/isearch.github.repository.usecase';
import {ResultSearchGithubRepositoryEntity} from '../bussiness/entities/result.search.github.repository.entity';
import AsyncStorage from '@react-native-community/async-storage';

export class SearchViewController {
  public repositoryName: string;

  public isLoading: boolean;
  public setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;

  public foundRepositories: React.MutableRefObject<ResultSearchGithubRepositoryEntity[]>;

  public timer: any;

  constructor(private readonly searchRepositoryUsecase: ISearchGithubRepositoryUsecase) {
    this.repositoryName = '';
    [this.isLoading, this.setIsLoading] = useState<boolean>(false);
    this.foundRepositories = useRef<ResultSearchGithubRepositoryEntity[]>([]);
  }

  public setTimer(textInput: string) {
    clearTimeout(this.timer);
    this.repositoryName = textInput;
    this.timer = setTimeout(() => this.searchRepository(), 750);
  }

  private async searchRepository() {
    this.setIsLoading(true);
    Keyboard.dismiss();

    const result = await this.searchRepositoryUsecase.search(this.repositoryName, []);
    this.foundRepositories.current = result;

    this.setIsLoading(false);
  }

  public async saveRepoToObserver(repositoryId: number) {
    const getRepositorySelected = this.foundRepositories.current.find((item) => item.id === repositoryId);

    if (!getRepositorySelected) {
      console.log('ERRROU');
    }

    const observed = await AsyncStorage.getItem('@observed');
    let observedJSON = [];
    if (observed) {
      observedJSON = JSON.parse(observed);
    }
    await AsyncStorage.setItem('@observed', JSON.stringify([...observedJSON, getRepositorySelected]));
    console.log(getRepositorySelected);
  }
}
