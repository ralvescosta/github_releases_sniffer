import {IGetLastSniffedReleaseRepository} from '../protocols/iget.last.sniffed.release.repository';

export class GetLastSniffedReleaseRepositorySpy implements IGetLastSniffedReleaseRepository {
  public releasesUrl: string = '';
  public async get(releasesUrl: string): Promise<any> {
    this.releasesUrl = releasesUrl;
    return {
      tagName: 'tag',
    };
  }
}
