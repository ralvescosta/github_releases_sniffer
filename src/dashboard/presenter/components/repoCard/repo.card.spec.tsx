import React from 'react';
import {render} from '@testing-library/react-native';

import {RepoCard} from './index';
import {ModelSnifferDetails} from '../modelSnifferDetails/index';
import {SniffedGithubRepositoryEntity} from '../../../bussiness/entities/sniffed.github.repository.entity';
import {RepoCardViewControllerSpy} from '../../__test__/repo.card.view.controller.spy';
import {ModalSnifferDetailsViewControllerSpy} from '../../__test__/modal.sniffer.details.view.controller.spy';

function makeSut() {
  const Wrapper = () => {
    const repository = new SniffedGithubRepositoryEntity(1, '', '', 10, 10, 10, 1, '', '', '');
    const cardControllerSpy = new RepoCardViewControllerSpy();
    const modalControllerSpy = new ModalSnifferDetailsViewControllerSpy();

    const WrapperModal = () => {
      return <ModelSnifferDetails repository={repository} viewController={modalControllerSpy} />;
    };
    return <RepoCard ModelSnifferDetails={WrapperModal} repository={repository} viewController={cardControllerSpy} />;
  };

  return render(<Wrapper />);
}

describe('Repo Card Components', () => {
  it('Should render correctly', () => {
    const sut = makeSut();

    expect(sut.toJSON()).toMatchSnapshot();
  });
});
