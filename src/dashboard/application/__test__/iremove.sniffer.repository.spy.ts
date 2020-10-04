import {SniffedGithubRepositoryEntity} from '../../bussiness/entities/sniffed.github.repository.entity';
import {IRemoveSnifferRepository} from '../protocols/iremove.sniffer.repository';

export class RemoveSnifferRepositorySpy implements IRemoveSnifferRepository {
  public repositoryId: number = 0;
  public sniffedGithubRepositoryEntity = [
    new SniffedGithubRepositoryEntity(1, 'fullName', 'description', 1, 1, 1, 1, 'ownerAvatarUrl', 'releasesUrl', 'lastRelease'),
  ];
  public async removeSniffer(repositoryId: number): Promise<boolean> {
    this.repositoryId = repositoryId;
    return true;
  }
}
