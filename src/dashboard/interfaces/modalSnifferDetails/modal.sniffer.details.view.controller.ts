import React, {useContext} from 'react';

import {IModalSnifferDetailsViewController} from './imodal.sniffer.details.view.controller';
import {SniffedRepositoriesContext} from '../../../core/context/sniffed.repositories.context';
import {IRemoveSnifferRepoUsecase} from '../../bussiness/usecases/iremove.sniffer.repo.usecase';

export class ModalSnifferDetailsViewController implements IModalSnifferDetailsViewController {
  private _snifferContext = useContext(SniffedRepositoriesContext);

  constructor(
    public modalControl: boolean,
    private readonly _setModalControl: React.Dispatch<React.SetStateAction<boolean>>,
    private readonly removeSnifferRepoUsecase: IRemoveSnifferRepoUsecase,
  ) {}

  public closeModal() {
    this._setModalControl(false);
  }

  public async removeRepository(repositoryId: number) {
    const sniffed = this._snifferContext.sniffedRepositories;
    const filter = await this.removeSnifferRepoUsecase.remove(repositoryId, sniffed);

    this._snifferContext.setSniffedRepositories(filter);
  }
}
