export interface IRemoveSnifferRepository {
  removeSniffer: (repositoryId: number) => Promise<boolean>;
}
