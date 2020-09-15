import {SniffedGithubRepositoryEntity} from '../../bussiness/entities/sniffed.github.repository.entity';
import {IUpdateLocallySniffedRepository} from '../protocols/iupdate.locally.sniffed.repository';
import {ResultSearchGithubRepositoryEntity} from '../../bussiness/entities/result.search.github.repository.entity';

export class UpdateLocallySniffedRepositorySpy implements IUpdateLocallySniffedRepository {
  public sniffedEntity = [new SniffedGithubRepositoryEntity(1, '', '', 10, 10, 10, 1, '', '', '')];
  public resultSearchEntity = new ResultSearchGithubRepositoryEntity(1, '', '', 10, 10, 10, 1, '', '');

  public async update(entity: SniffedGithubRepositoryEntity[]): Promise<boolean> {
    this.sniffedEntity = entity;
    return true;
  }
}
