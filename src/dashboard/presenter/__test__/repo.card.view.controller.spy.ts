import React, {useState} from 'react';

import {IRepoCardViewController} from '../../interfaces/repoCard/irepo.card.view.controller';

export class RepoCardViewControllerSpy implements IRepoCardViewController {
  public modalControl: boolean;
  public setModalControl: React.Dispatch<React.SetStateAction<boolean>>;

  constructor() {
    [this.modalControl, this.setModalControl] = useState<boolean>(false);
  }

  public openModal() {
    this.setModalControl(true);
  }
}
