import {ResultSearchGithubRepositoryEntity} from '../entities/result.search.github.repository.entity';
import {SniffedGithubRepositoryEntity} from '../entities/sniffed.github.repository.entity';

export interface ISaveRepositoryToSnifferUsecase {
  saveToSniffer: (repository: ResultSearchGithubRepositoryEntity) => Promise<SniffedGithubRepositoryEntity>;
}
