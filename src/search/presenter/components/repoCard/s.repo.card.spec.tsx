import React from 'react';
import {render} from '@testing-library/react-native';

import {RepoCard} from './index';
import {RepoCardViewControllerSpy} from '../../__test__/repo.card.view.controller.spy';

function makeSut() {
  const Wrapper = () => {
    const repoController = new RepoCardViewControllerSpy();
    return <RepoCard viewController={repoController} />;
  };

  return render(<Wrapper />);
}

describe('Search Repo Card Components', () => {
  it('Should render correctly', () => {
    const sut = makeSut();

    expect(sut.toJSON()).toMatchSnapshot();
  });
});
