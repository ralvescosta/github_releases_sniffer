export class GithubRepositoryEntity {
  constructor(
    public id: number,
    public fullName: string,
    public description: string,
    public stargazersCount: number,
    public forks: number,
    public openIssues: number,
  ) {}
}
