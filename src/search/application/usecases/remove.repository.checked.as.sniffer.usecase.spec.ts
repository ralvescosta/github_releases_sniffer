import {RemoveRepositoryCheckedAsSnifferUsecase} from './remove.repository.checked.as.sniffer.usecase';
import {UpdateLocallySniffedRepositorySpy} from '../__test__/update.locally.sniffed.repository.spy';
import {SniffedGithubRepositoryEntity} from '../../bussiness/entities/sniffed.github.repository.entity';

type SutTypes = {
  sut: RemoveRepositoryCheckedAsSnifferUsecase;
  updateLocallySniffedRepositorySpy: UpdateLocallySniffedRepositorySpy;
};

function makeSut(): SutTypes {
  const updateLocallySniffedRepositorySpy = new UpdateLocallySniffedRepositorySpy();
  const sut = RemoveRepositoryCheckedAsSnifferUsecase.getInstance(updateLocallySniffedRepositorySpy);

  return {
    sut,
    updateLocallySniffedRepositorySpy,
  };
}

describe('Remove Repository Checked As Sniffer Usecase', () => {
  it('remove()', async () => {
    const {sut, updateLocallySniffedRepositorySpy} = makeSut();
    jest.spyOn(updateLocallySniffedRepositorySpy, 'update');

    await sut.remove(1, updateLocallySniffedRepositorySpy.sniffedEntity);

    expect(updateLocallySniffedRepositorySpy.update).toHaveBeenCalledTimes(1);
  });

  it('Should return array of SniffedGithubRepositoryEntity if success', async () => {
    const {sut, updateLocallySniffedRepositorySpy} = makeSut();
    jest.spyOn(updateLocallySniffedRepositorySpy, 'update');

    const result = await sut.remove(2, updateLocallySniffedRepositorySpy.sniffedEntity);

    expect(result[0]).toBeInstanceOf(SniffedGithubRepositoryEntity);
  });
});
