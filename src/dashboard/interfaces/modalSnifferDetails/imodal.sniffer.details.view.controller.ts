export interface IModalSnifferDetailsViewController {
  modalContext: any;
  closeModal: (repositoryId: number) => void;
  removeRepository: (repositoryId: number) => Promise<void>;
}
