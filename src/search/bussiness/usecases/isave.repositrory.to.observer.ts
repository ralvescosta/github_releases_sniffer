import {ResultSearchGithubRepositoryEntity} from '../entities/result.search.github.repository.entity';

export interface ISaveRepositoryToObserver {
  saveToObserver: (repository: ResultSearchGithubRepositoryEntity) => Promise<boolean>;
}
