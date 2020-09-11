export interface ISearchGithubRepoRepository {
  get: (releasesUrl: string) => Promise<any>;
}
