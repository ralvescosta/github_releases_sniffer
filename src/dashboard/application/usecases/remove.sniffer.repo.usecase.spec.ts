import {RemoveSnifferRepoUsecase} from './remove.sniffer.repo.usecase';
import {RemoveSnifferRepositorySpy} from '../__test__/iremove.sniffer.repository.spy';

function makeSut() {
  const removeSnifferRepositorySpy = new RemoveSnifferRepositorySpy();
  const sut = RemoveSnifferRepoUsecase.getInstance(removeSnifferRepositorySpy);

  return {
    sut,
    removeSnifferRepositorySpy,
  };
}

describe('Remove Sniffer Repo Usecase', () => {
  it('remove()', async () => {
    const {sut, removeSnifferRepositorySpy} = makeSut();

    jest.spyOn(removeSnifferRepositorySpy, 'removeSniffer');

    await sut.remove(1, removeSnifferRepositorySpy.sniffedGithubRepositoryEntity);

    expect(removeSnifferRepositorySpy.removeSniffer).toHaveBeenCalledTimes(1);
  });
});
