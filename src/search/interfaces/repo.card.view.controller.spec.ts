import 'react';
import {RepoCardViewController} from './repo.card.view.controller';
import {RemoveRepositoryCheckedAsSnifferUsecaseSpy} from './__test__/remove.repository.checked.as.sniffer.usecase.spy';
import {SaveRepositoryToSnifferUsecaseSpy} from './__test__/save.repositrory.to.sniffer.usecase.spy';

jest.mock('react', () => ({
  useRef: jest.fn(() => ({current: {value: 'some_thing'}})),
  useState: jest.fn(() => [[], jest.fn()]),
  useEffect: jest.fn(() => {}),
  useContext: jest.fn(() => {}),
  createContext: jest.fn(),
}));

type SutTypes = {
  sut: RepoCardViewController;
  saveRepositoryToSnifferUsecaseSpy: SaveRepositoryToSnifferUsecaseSpy;
};

function makeSut(): SutTypes {
  const saveRepositoryToSnifferUsecaseSpy = new SaveRepositoryToSnifferUsecaseSpy();
  const removeRepositoryCheckedAsSnifferUsecaseSpy = new RemoveRepositoryCheckedAsSnifferUsecaseSpy();
  const sut = new RepoCardViewController(
    saveRepositoryToSnifferUsecaseSpy.resultSearchEntity,
    saveRepositoryToSnifferUsecaseSpy,
    removeRepositoryCheckedAsSnifferUsecaseSpy,
  );

  return {
    sut,
    saveRepositoryToSnifferUsecaseSpy,
  };
}

describe('Repo Card View Controller', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('saveRepoToObserver()', async () => {
    const {sut, saveRepositoryToSnifferUsecaseSpy} = makeSut();
    jest.spyOn(saveRepositoryToSnifferUsecaseSpy, 'saveToSniffer');

    await sut.saveRepositoryToSniffer();

    expect(saveRepositoryToSnifferUsecaseSpy.saveToSniffer).toHaveBeenCalledTimes(1);
  });

  it('Should Throw Error if SaveRepositoryToSnifferUsecase throws', async () => {
    const {sut, saveRepositoryToSnifferUsecaseSpy} = makeSut();
    jest.spyOn(saveRepositoryToSnifferUsecaseSpy, 'saveToSniffer').mockRejectedValueOnce(new Error());

    const result = sut.saveRepositoryToSniffer();

    expect(result).rejects.toThrow(new Error());
  });
});
