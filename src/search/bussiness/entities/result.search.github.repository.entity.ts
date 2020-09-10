export class ResultSearchGithubRepositoryEntity {
  constructor(
    public id: number,
    public fullName: string,
    public description: string,
    public stargazersCount: number,
    public forks: number,
    public openIssues: number,
    public ownerId: number,
    public ownerAvatarUrl: string,
    public checked: boolean = false,
  ) {}
}
