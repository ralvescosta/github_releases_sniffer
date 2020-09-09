export class ObservedGithubRepositoryEntity {
  constructor(
    public fullName: string,
    public description: string,
    public stargazersCount: number,
    public forks: number,
    public openIssues: number,
    public lastRelease: string,
    public releaseURL: string,
  ) {}
}
