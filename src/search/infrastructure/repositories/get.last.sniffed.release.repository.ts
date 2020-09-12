import {IGetLastSniffedReleaseRepository} from '../../application/protocols/iget.last.sniffed.release.repository';
import {GithubRepositoryReleasesDatasource} from '../datasources/github.repository.releases.datasource';

export class GetLastSniffedReleaseRepository implements IGetLastSniffedReleaseRepository {
  public async get(releasesUrl: string): Promise<any> {
    console.log(releasesUrl);
    let httpBody: GithubRepositoryReleasesDatasource[];
    try {
      const httpResponse = await fetch(releasesUrl, {method: 'GET'});

      if (httpResponse.status >= 400) {
        throw new Error(`${httpResponse.status}`);
      }

      httpBody = await httpResponse.json();

      if (!httpBody.length) {
        throw new Error('404');
      }
    } catch (err) {
      throw new Error();
    }
    console.log(httpBody);
    return {
      tagName: httpBody[0].tag_name,
    };
  }
}
