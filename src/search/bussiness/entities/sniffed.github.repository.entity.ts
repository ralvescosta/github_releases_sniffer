export class SniffedGithubRepositoryEntity {
  constructor(
    public id: number,
    public fullName: string,
    public description: string,
    public stargazersCount: number,
    public forks: number,
    public openIssues: number,
    public ownerId: number,
    public ownerAvatarUrl: string,
    public releasesUrl: string,
    public lastRelease: string,
  ) {}
}
