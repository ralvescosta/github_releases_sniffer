import {IGetLastSniffedReleaseRepository} from '../../application/protocols/iget.last.sniffed.release.repository';
import {GithubRepositoryReleasesDatasource} from '../datasources/github.repository.releases.datasource';

export class GetLastSniffedReleaseRepository implements IGetLastSniffedReleaseRepository {
  /**
   * Singleton
   */
  private static instance: GetLastSniffedReleaseRepository;
  private constructor() {}
  public static getInstance(): GetLastSniffedReleaseRepository {
    if (!GetLastSniffedReleaseRepository.instance) {
      GetLastSniffedReleaseRepository.instance = new GetLastSniffedReleaseRepository();
    }

    return GetLastSniffedReleaseRepository.instance;
  }

  public async get(releasesUrl: string): Promise<any> {
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

    return {
      tagName: httpBody[0].tag_name,
    };
  }
}
