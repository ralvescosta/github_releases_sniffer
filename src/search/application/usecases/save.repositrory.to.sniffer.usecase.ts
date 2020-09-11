import {ISaveRepositoryToSnifferUsecase} from '../../bussiness/usecases/isave.repositrory.to.sniffer.usecase';
import {ResultSearchGithubRepositoryEntity} from '../../bussiness/entities/result.search.github.repository.entity';
import {SniffedGithubRepositoryEntity} from '../../bussiness/entities/sniffed.github.repository.entity';

import {ISaveLocallySniffedRepository} from '../protocols/isave.locally.sniffed.repository';
import {IGetLastSniffedReleaseRepository} from '../protocols/iget.last.sniffed.release.repository';

export class SaveRepositoryToSnifferUsecase implements ISaveRepositoryToSnifferUsecase {
  constructor(
    public locallySniffedRepository: ISaveLocallySniffedRepository,
    public getLastReleaseRepository: IGetLastSniffedReleaseRepository,
  ) {}

  public async saveToSniffer(repository: ResultSearchGithubRepositoryEntity): Promise<SniffedGithubRepositoryEntity> {
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

    return newSniffed;
  }
}
