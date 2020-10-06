import AsyncStorage from '@react-native-community/async-storage';
import {LocalDatabaseRepository} from './local.database.repository';

jest.mock('@react-native-community/async-storage', () => ({
  getItem: jest.fn(() => undefined),
  setItem: jest.fn(),
}));

function makeSut() {
  const sut = LocalDatabaseRepository.getInstance();

  return {sut};
}

describe('Local Database Repository', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('getUserAccountAndSniffer()', async () => {
    const {sut} = makeSut();

    await sut.getUserAccountAndSniffer();

    expect(AsyncStorage.getItem).toHaveBeenCalledTimes(2);
  });

  it('removeSniffer()', async () => {
    const {sut} = makeSut();

    await sut.removeSniffer(1);

    expect(AsyncStorage.getItem).toHaveBeenCalledTimes(1);
    expect(AsyncStorage.setItem).toHaveBeenCalledTimes(1);
  });
});
