import {IModalSnifferDetailsViewController} from '../../interfaces/modalSnifferDetails/imodal.sniffer.details.view.controller';

export class ModalSnifferDetailsViewControllerSpy implements IModalSnifferDetailsViewController {
  public repositoryId: number = 0;

  private _snifferContext = {
    sniffedRepositories: [],
    setSniffedRepositories: jest.fn(),
    isNetworkAvailable: true,
    setIsNetworkAvailable: jest.fn(),
  };

  public modalControl = true;

  public isNetworkAvailable: boolean = true;

  public closeModal() {}

  public async removeRepository(repositoryId: number) {
    this.repositoryId = repositoryId;
  }
}
