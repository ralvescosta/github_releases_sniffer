import React from 'react';
import {render} from '@testing-library/react-native';

import {Dashboard} from './dashboard.screen';
import {SniffedGithubRepositoryEntity} from '../bussiness/entities/sniffed.github.repository.entity';
import {RepoCardViewControllerSpy} from './__test__/repo.card.view.controller.spy';
import {ModalSnifferDetailsViewControllerSpy} from './__test__/modal.sniffer.details.view.controller.spy';
import {DashboardViewControllerSpy} from './__test__/dashboard.view.controller.spy';

import {ModelSnifferDetails} from './components/modelSnifferDetails';
import {RepoCard} from './components/repoCard';

function makeSut() {
  const Wrapper = () => {
    const repository = new SniffedGithubRepositoryEntity(1, '', '', 10, 10, 10, 1, '', '', '');
    const cardControllerSpy = new RepoCardViewControllerSpy();
    const modalControllerSpy = new ModalSnifferDetailsViewControllerSpy();
    const dashboardControllerSpy = new DashboardViewControllerSpy();

    const WrapperModal = () => {
      return <ModelSnifferDetails repository={repository} viewController={modalControllerSpy} />;
    };
    const WrapperRepoCard = () => (
      <RepoCard ModelSnifferDetails={WrapperModal} repository={repository} viewController={cardControllerSpy} />
    );
    return <Dashboard RepoCard={WrapperRepoCard} viewController={dashboardControllerSpy} />;
  };

  return render(<Wrapper />);
}

describe('Dashboard Screen', () => {
  it('Should render correctly', () => {
    const sut = makeSut();

    expect(sut.toJSON()).toMatchSnapshot();
  });
});
