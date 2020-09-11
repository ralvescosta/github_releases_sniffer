export interface IGetLastSniffedReleaseRepository {
  get: (releasesUrl: string) => Promise<any>;
}
