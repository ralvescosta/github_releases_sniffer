import {IGetLastSniffedReleaseRepository} from '../../application/protocols/iget.last.sniffed.release.repository';

export class GetLastSniffedReleaseRepository implements IGetLastSniffedReleaseRepository {
  public async get(releasesUrl: string): Promise<any> {
    console.log(releasesUrl);
    return {
      tagName: 'v6.3',
    };
  }
}
