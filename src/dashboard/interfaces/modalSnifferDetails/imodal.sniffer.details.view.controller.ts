export interface IModalSnifferDetailsViewController {
  modalContext: any;
  closeModal: () => void;
  removeRepository: (repositoryId: number) => Promise<void>;
}
