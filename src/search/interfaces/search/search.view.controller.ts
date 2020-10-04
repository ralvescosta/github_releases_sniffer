import {useState, useRef, useContext} from 'react';
import {Keyboard} from 'react-native';

import {SniffedRepositoriesContext} from '../../../core/context/sniffed.repositories.context';
import {ISearchViewController} from './isearch.view.controller';

import {ISearchGithubRepositoryUsecase} from '../../bussiness/usecases/isearch.github.repository.usecase';
import {ResultSearchGithubRepositoryEntity} from '../../bussiness/entities/result.search.github.repository.entity';

export class SearchViewController implements ISearchViewController {
  public repositoryName: React.MutableRefObject<string>;

  public isLoading: boolean;
  public setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;

  public foundRepositories: React.MutableRefObject<ResultSearchGithubRepositoryEntity[]>;

  public context = useContext(SniffedRepositoriesContext);

  constructor(private readonly _searchRepositoryUsecase: ISearchGithubRepositoryUsecase) {
    this.repositoryName = useRef('');
    [this.isLoading, this.setIsLoading] = useState<boolean>(false);

    this.foundRepositories = useRef<ResultSearchGithubRepositoryEntity[]>([]);
  }

  public async searchRepository(): Promise<void> {
    if (!this.repositoryName.current) {
      throw new Error();
    }

    this.setIsLoading(true);
    Keyboard.dismiss();

    const result = await this._searchRepositoryUsecase.search(this.repositoryName.current, this.context.sniffedRepositories);
    this.foundRepositories.current = result;

    this.setIsLoading(false);
  }
}
