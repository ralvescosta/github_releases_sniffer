import {ISaveRepositoryToSnifferUsecase} from '../../bussiness/usecases/isave.repositrory.to.sniffer.usecase';
import {ResultSearchGithubRepositoryEntity} from '../../bussiness/entities/result.search.github.repository.entity';
import {SniffedGithubRepositoryEntity} from '../../bussiness/entities/sniffed.github.repository.entity';

export class SaveRepositoryToSnifferUsecaseSpy implements ISaveRepositoryToSnifferUsecase {
  public sniffedEntity = new SniffedGithubRepositoryEntity(1, '', '', 10, 10, 10, 1, '', '', '');
  public resultSearchEntity = new ResultSearchGithubRepositoryEntity(1, '', '', 10, 10, 10, 1, '', '');

  public async saveToSniffer(repository: ResultSearchGithubRepositoryEntity): Promise<SniffedGithubRepositoryEntity> {
    this.resultSearchEntity = repository;
    return this.sniffedEntity;
  }
}
