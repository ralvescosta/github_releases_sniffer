import {useContext} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import {SniffedRepositoriesContext} from '../../../core/context/sniffed.repositories.context';
import {ModalContext} from '../context/modal.context';

export class ModalSnifferDetailsViewController {
  public modalContext = useContext(ModalContext);
  private _snifferContext = useContext(SniffedRepositoriesContext);

  public closeModal(repositoryId: number) {
    this.modalContext.toggleModal[repositoryId] = false;
    this.modalContext.setToggleModal({...this.modalContext.toggleModal, [`${repositoryId}`]: false});
  }

  public async removeRepository(repositoryId: number) {
    const sniffed = this._snifferContext.sniffedRepositories;
    const filter = sniffed.filter((item: any) => item.id !== repositoryId);

    this._snifferContext.setSniffedRepositories(filter);
    await AsyncStorage.setItem('@sniffed', JSON.stringify(filter));
  }
}
