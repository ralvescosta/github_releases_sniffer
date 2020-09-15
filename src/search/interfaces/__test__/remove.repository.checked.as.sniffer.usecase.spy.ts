import {SniffedGithubRepositoryEntity} from '../../bussiness/entities/sniffed.github.repository.entity';
import {IRemoveRepositoryCheckedAsSnifferUsecase} from '../../bussiness/usecases/iremove.repository.checked.as.sniffer.usecase';

export class RemoveRepositoryCheckedAsSnifferUsecaseSpy implements IRemoveRepositoryCheckedAsSnifferUsecase {
  public removedRepositoryId = 0;
  public sniffedRepositories = [new SniffedGithubRepositoryEntity(1, '', '', 10, 10, 10, 1, '', '', '')];

  public async remove(
    removedRepositoryId: number,
    sniffedRepositories: SniffedGithubRepositoryEntity[],
  ): Promise<SniffedGithubRepositoryEntity[]> {
    this.removedRepositoryId = removedRepositoryId;
    this.sniffedRepositories = sniffedRepositories;

    return sniffedRepositories;
  }
}
