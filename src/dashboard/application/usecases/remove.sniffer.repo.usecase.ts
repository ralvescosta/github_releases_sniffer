import {SniffedGithubRepositoryEntity} from '../../bussiness/entities/sniffed.github.repository.entity';
import {IRemoveSnifferRepoUsecase} from '../../bussiness/usecases/iremove.sniffer.repo.usecase';
import {IRemoveSnifferRepository} from '../protocols/iremove.sniffer.repository';

export class RemoveSnifferRepoUsecase implements IRemoveSnifferRepoUsecase {
  /**
   * singleton
   */
  private static _instance: RemoveSnifferRepoUsecase;
  private constructor(private readonly _removeSnifferRepository: IRemoveSnifferRepository) {}
  static getInstance(removeSnifferRepository: IRemoveSnifferRepository): RemoveSnifferRepoUsecase {
    if (!RemoveSnifferRepoUsecase._instance) {
      RemoveSnifferRepoUsecase._instance = new RemoveSnifferRepoUsecase(removeSnifferRepository);
    }
    return RemoveSnifferRepoUsecase._instance;
  }

  public async remove(repositoryId: number, snifferRepos: SniffedGithubRepositoryEntity[]): Promise<SniffedGithubRepositoryEntity[]> {
    const filter = snifferRepos.filter((item) => item.id !== repositoryId);

    await this._removeSnifferRepository.removeSniffer(repositoryId);

    return filter;
  }
}
