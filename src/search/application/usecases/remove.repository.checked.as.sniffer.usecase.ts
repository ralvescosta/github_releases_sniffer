import {SniffedGithubRepositoryEntity} from '../../bussiness/entities/sniffed.github.repository.entity';
import {IRemoveRepositoryCheckedAsSnifferUsecase} from '../../bussiness/usecases/iremove.repository.checked.as.sniffer.usecase';
import {IUpdateLocallySniffedRepository} from '../protocols/iupdate.locally.sniffed.repository';

export class RemoveRepositoryCheckedAsSnifferUsecase implements IRemoveRepositoryCheckedAsSnifferUsecase {
  /**
   * Singleton
   */
  private static instance: RemoveRepositoryCheckedAsSnifferUsecase;
  private constructor(private readonly updateLocallySniffedRepository: IUpdateLocallySniffedRepository) {}
  public static getInstance(updateLocallySniffedRepository: IUpdateLocallySniffedRepository): RemoveRepositoryCheckedAsSnifferUsecase {
    if (!RemoveRepositoryCheckedAsSnifferUsecase.instance) {
      RemoveRepositoryCheckedAsSnifferUsecase.instance = new RemoveRepositoryCheckedAsSnifferUsecase(updateLocallySniffedRepository);
    }

    return RemoveRepositoryCheckedAsSnifferUsecase.instance;
  }

  public async remove(
    removedRepositoryId: number,
    sniffedRepositories: SniffedGithubRepositoryEntity[],
  ): Promise<SniffedGithubRepositoryEntity[]> {
    const filterRepositories = sniffedRepositories.filter((item: any) => item.id !== removedRepositoryId);

    await this.updateLocallySniffedRepository.update(filterRepositories);

    return filterRepositories;
  }
}
