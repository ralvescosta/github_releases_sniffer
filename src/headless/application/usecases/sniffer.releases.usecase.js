export class SnifferReleasesUsecase {
  constructor(githubGetLastReleaseRepository, localDatabaseRepository) {
    this._githubGetLastReleaseRepository = githubGetLastReleaseRepository;
    this._localDatabaseRepository = localDatabaseRepository;
  }

  async sniffer() {
    const repositories = await this._localDatabaseRepository.getAllRepositories();

    const releases = [];
    repositories.forEach(async (item) => {
      const result = await this._githubGetLastReleaseRepository.get(item.releasesUrl);
      releases.push(result.tagName);
    });
  }
}
