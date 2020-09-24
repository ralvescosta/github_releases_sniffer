import {useContext} from 'react';

import {ModalContext} from '../context/modal.context';

export class RepoCardViewController {
  public context = useContext(ModalContext);

  public openModal(repositoryId: number) {
    this.context.setToggleModal({...this.context.toggleModal, [`${repositoryId}`]: true});
  }
}
