import {ResultSearchGithubRepositoryEntity} from '../../bussiness/entities/result.search.github.repository.entity';
import {ISaveRepositoryToObserver} from '../../bussiness/usecases/isave.repositrory.to.observer';
import {SniffedGithubRepositoryEntity} from '../../bussiness/entities/sniffed.github.repository.entity';

import {ISaveLocallySniffedRepository} from '../protocols/isave.locally.sniffed.repository';
import {ISearchGithubRepoRepository} from '../protocols/iget.last.sniffed.release.repository';

export class SaveRepositoryToObserver implements ISaveRepositoryToObserver {
  constructor(
    public locallySniffedRepository: ISaveLocallySniffedRepository,
    public getLastReleaseRepository: ISearchGithubRepoRepository,
  ) {}

  public async saveToObserver(repository: ResultSearchGithubRepositoryEntity): Promise<boolean> {
    const lastRelease = await this.getLastReleaseRepository.get(repository.releasesUrl);

    const newSniffed = new SniffedGithubRepositoryEntity(
      repository.id,
      repository.fullName,
      repository.description,
      repository.stargazersCount,
      repository.forks,
      repository.openIssues,
      repository.ownerId,
      repository.ownerAvatarUrl,
      repository.releasesUrl,
      lastRelease.tagName,
    );

    await this.locallySniffedRepository.saveSniffed(newSniffed);

    return true;
  }
}
