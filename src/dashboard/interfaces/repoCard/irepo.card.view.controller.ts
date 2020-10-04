import React from 'react';

export interface IRepoCardViewController {
  modalControl: boolean;
  setModalControl: React.Dispatch<React.SetStateAction<boolean>>;
  openModal: (repositoryId: number) => void;
}
