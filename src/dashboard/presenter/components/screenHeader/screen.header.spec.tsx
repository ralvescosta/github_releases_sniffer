import React from 'react';
import {render} from '@testing-library/react-native';

import {Header} from './index';

function makeSut(account: any = {}, amountOfAlerts: number = 1, amountOfRepos: number = 1, isNetworkAvailable: boolean = true) {
  return render(
    <Header account={account} amountOfAlerts={amountOfAlerts} amountOfRepos={amountOfRepos} isNetworkAvailable={isNetworkAvailable} />,
  );
}

describe('Screen Header Components', () => {
  it('Should render correctly', () => {
    const sut = makeSut();

    expect(sut.toJSON()).toMatchSnapshot();
  });
});
