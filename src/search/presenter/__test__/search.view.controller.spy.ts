import {useState, useRef, useContext} from 'react';

import {GlobalContext} from '../../../core/context/sniffed.repositories.context';
import {ISearchViewController} from '../../interfaces/search/isearch.view.controller';

import {ResultSearchGithubRepositoryEntity} from '../../bussiness/entities/result.search.github.repository.entity';

export class SearchViewControllerSpy implements ISearchViewController {
  public repositoryName: React.MutableRefObject<string>;

  public isLoading: boolean;
  public setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;

  public foundRepositories: React.MutableRefObject<ResultSearchGithubRepositoryEntity[]>;

  public context = useContext(GlobalContext);
  public isNetworkAvailable = true;

  constructor() {
    this.repositoryName = useRef('');
    [this.isLoading, this.setIsLoading] = useState<boolean>(false);

    this.foundRepositories = useRef<ResultSearchGithubRepositoryEntity[]>([]);
  }

  public async searchRepository(): Promise<void> {}
}
