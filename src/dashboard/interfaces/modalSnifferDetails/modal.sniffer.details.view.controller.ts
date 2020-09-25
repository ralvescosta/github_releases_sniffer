import React, {useContext} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import {IModalSnifferDetailsViewController} from './imodal.sniffer.details.view.controller';
import {SniffedRepositoriesContext} from '../../../core/context/sniffed.repositories.context';

export class ModalSnifferDetailsViewController implements IModalSnifferDetailsViewController {
  private _snifferContext = useContext(SniffedRepositoriesContext);

  constructor(public modalControl: boolean, private readonly setModalControl: React.Dispatch<React.SetStateAction<boolean>>) {}

  public closeModal() {
    this.setModalControl(false);
  }

  public async removeRepository(repositoryId: number) {
    const sniffed = this._snifferContext.sniffedRepositories;
    const filter = sniffed.filter((item: any) => item.id !== repositoryId);

    this._snifferContext.setSniffedRepositories(filter);
    await AsyncStorage.setItem('@sniffed', JSON.stringify(filter));
  }
}
