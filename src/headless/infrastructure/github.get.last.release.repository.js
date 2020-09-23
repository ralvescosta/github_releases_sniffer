/* eslint-disable prettier/prettier */
export class GithubGetLastReleaseRepository {
  async get(releaseUrl) {
    const lastRelease = await fetch(releaseUrl, {
      method: 'GET',
    });

    return {
      tagName: lastRelease.tag_name,
    };
  }
}
