import React from 'react';
import {render} from '@testing-library/react-native';

import {SearchScreen} from './search.screen';
import {SearchViewControllerSpy} from './__test__/search.view.controller.spy';
import {RepoCardViewControllerSpy} from './__test__/repo.card.view.controller.spy';
import {RepoCard} from './components/repoCard';

function makeSut() {
  const Wrapper = () => {
    const searchController = new SearchViewControllerSpy();
    const repoController = new RepoCardViewControllerSpy();

    const RepoWrapper = () => {
      return <RepoCard viewController={repoController} />;
    };
    return <SearchScreen viewController={searchController} RepoCard={RepoWrapper} />;
  };

  return render(<Wrapper />);
}

describe('Search Screen', () => {
  it('Should return correctly', () => {
    const sut = makeSut();

    expect(sut.toJSON()).toMatchSnapshot();
  });
});
