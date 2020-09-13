import {SniffedGithubRepositoryEntity} from '../../bussiness/entities/sniffed.github.repository.entity';
import {ISaveLocallySniffedRepository} from '../../application/protocols/isave.locally.sniffed.repository';
import {ResultSearchGithubRepositoryEntity} from '../../bussiness/entities/result.search.github.repository.entity';

export class SaveLocallySniffedRepositorySpy implements ISaveLocallySniffedRepository {
  public sniffedEntity = new SniffedGithubRepositoryEntity(1, '', '', 10, 10, 10, 1, '', '', '');
  public resultSearchEntity = new ResultSearchGithubRepositoryEntity(1, '', '', 10, 10, 10, 1, '', '');

  public async saveSniffed(entity: SniffedGithubRepositoryEntity): Promise<boolean> {
    this.sniffedEntity = entity;
    return true;
  }
}
