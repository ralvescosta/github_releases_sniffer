import {SniffedGithubRepositoryEntity} from '../../bussiness/entities/sniffed.github.repository.entity';
import {IRemoveSnifferRepoUsecase} from '../../bussiness/usecases/iremove.sniffer.repo.usecase';

export class RemoveSnifferRepoUsecase implements IRemoveSnifferRepoUsecase {
  public sniffedGithub = [new SniffedGithubRepositoryEntity(1, 'fullName', 'description', 1, 1, 1, 1, '', '', '')];
  public repositoryId = 0;
  public snifferRepos: any = [];

  public async remove(repositoryId: number, snifferRepos: SniffedGithubRepositoryEntity[]): Promise<SniffedGithubRepositoryEntity[]> {
    this.repositoryId = repositoryId;
    this.snifferRepos = snifferRepos;
    return this.sniffedGithub;
  }
}
