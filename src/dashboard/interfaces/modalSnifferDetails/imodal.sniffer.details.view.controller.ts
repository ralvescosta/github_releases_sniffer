export interface IModalSnifferDetailsViewController {
  modalControl: boolean;
  closeModal: (repositoryId: number) => void;
  removeRepository: (repositoryId: number) => Promise<void>;
}
