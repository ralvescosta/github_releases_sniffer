import {useState} from 'react';
import {Keyboard} from 'react-native';
import {ISearchGithubRepositoryUsecase} from '../bussiness/usecases/isearch.github.repository.usecase';
import {ResultSearchGithubRepositoryEntity} from '../bussiness/entities/result.search.github.repository.entity';

export class SearchViewController {
  public repositoryName: string;
  public isLoading: boolean;
  public setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  public repositories: ResultSearchGithubRepositoryEntity[];
  public setRepositories: React.Dispatch<React.SetStateAction<ResultSearchGithubRepositoryEntity[]>>;
  public timer: any;

  constructor(private readonly searchRepositoryUsecase: ISearchGithubRepositoryUsecase) {
    this.repositoryName = '';
    [this.isLoading, this.setIsLoading] = useState<boolean>(false);
    [this.repositories, this.setRepositories] = useState<ResultSearchGithubRepositoryEntity[]>([]);
  }

  public setTimer(textInput: string) {
    clearTimeout(this.timer);
    this.repositoryName = textInput;
    this.timer = setTimeout(() => this.searchRepository(), 500);
  }

  private async searchRepository() {
    this.setIsLoading(true);
    Keyboard.dismiss();
    const result = await this.searchRepositoryUsecase.search(this.repositoryName, []);
    this.setRepositories(result);
    this.setIsLoading(false);
  }
}
