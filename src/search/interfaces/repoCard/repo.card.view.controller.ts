import {useState, useContext} from 'react';
import {IRepoCardViewController} from './irepo.card.view.controller';

import {GlobalContext} from '../../../core/context/sniffed.repositories.context';

import {ResultSearchGithubRepositoryEntity} from '../../bussiness/entities/result.search.github.repository.entity';
import {ISaveRepositoryToSnifferUsecase} from '../../bussiness/usecases/isave.repositrory.to.sniffer.usecase';
import {IRemoveRepositoryCheckedAsSnifferUsecase} from '../../bussiness/usecases/iremove.repository.checked.as.sniffer.usecase';

export class RepoCardViewController implements IRepoCardViewController {
  public repository: ResultSearchGithubRepositoryEntity;

  public switchState: boolean;
  public setSwitchState: React.Dispatch<React.SetStateAction<boolean>>;

  public loading: boolean;
  public setLoading: React.Dispatch<React.SetStateAction<boolean>>;

  public context = useContext(GlobalContext);

  constructor(
    repository: ResultSearchGithubRepositoryEntity,
    private readonly _saveToSnifferUsecase: ISaveRepositoryToSnifferUsecase,
    private readonly _removeSniffedUsecase: IRemoveRepositoryCheckedAsSnifferUsecase,
  ) {
    this.repository = repository;
    [this.switchState, this.setSwitchState] = useState<boolean>(this.repository.checked);
    [this.loading, this.setLoading] = useState<boolean>(false);
  }

  public async saveRepositoryToSniffer(): Promise<void> {
    this.setLoading(true);
    try {
      const sniffed = await this._saveToSnifferUsecase.saveToSniffer(this.repository);
      this.context.setSniffedRepositories([...this.context.sniffedRepositories, sniffed]);
      this.setSwitchState(true);
    } catch (err) {}

    this.setLoading(false);
  }

  public async removeSnifferRepository() {
    this.setLoading(true);

    const result = await this._removeSniffedUsecase.remove(this.repository.id, this.context.sniffedRepositories);
    this.context.setSniffedRepositories(result);

    this.setSwitchState(false);
    this.setLoading(false);
  }
}
