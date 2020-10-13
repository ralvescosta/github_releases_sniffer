import {useState, useContext} from 'react';
import {IRepoCardViewController} from '../../interfaces/repoCard/irepo.card.view.controller';

import {GlobalContext} from '../../../core/context/sniffed.repositories.context';

import {ResultSearchGithubRepositoryEntity} from '../../bussiness/entities/result.search.github.repository.entity';

export class RepoCardViewControllerSpy implements IRepoCardViewController {
  public repository = new ResultSearchGithubRepositoryEntity(1, '', '', 10, 10, 10, 1, '', '');

  public switchState: boolean;
  public setSwitchState: React.Dispatch<React.SetStateAction<boolean>>;

  public loading: boolean;
  public setLoading: React.Dispatch<React.SetStateAction<boolean>>;

  public context = useContext(GlobalContext);

  constructor() {
    [this.switchState, this.setSwitchState] = useState<boolean>(this.repository.checked);
    [this.loading, this.setLoading] = useState<boolean>(false);
  }

  public async saveRepositoryToSniffer(): Promise<void> {}

  public async removeSnifferRepository() {}
}
