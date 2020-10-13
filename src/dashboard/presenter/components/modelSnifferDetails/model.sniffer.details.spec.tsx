import React from 'react';
import {render} from '@testing-library/react-native';

import {ModelSnifferDetails} from './index';
import {SniffedGithubRepositoryEntity} from '../../../bussiness/entities/sniffed.github.repository.entity';
import {ModalSnifferDetailsViewControllerSpy} from '../../__test__/modal.sniffer.details.view.controller.spy';

function makeSut() {
  const WrapperModal = () => {
    const repository = new SniffedGithubRepositoryEntity(1, '', '', 10, 10, 10, 1, '', '', '');
    const modalControllerSpy = new ModalSnifferDetailsViewControllerSpy();
    return <ModelSnifferDetails repository={repository} viewController={modalControllerSpy} />;
  };

  return render(<WrapperModal />);
}

describe('Model Sniffer Details Component', () => {
  it('Should render correctly', () => {
    const sut = makeSut();

    expect(sut.toJSON()).toMatchSnapshot();
  });
});
