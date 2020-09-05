export class GithubUserAccountEntity {
  constructor(
    public id: number,
    public login: string,
    public avatarUrl: string,
    public name: string,
    public bio: string,
    public publicRepos: number,
    public followers: number,
    public following: number,
  ) {}
}
