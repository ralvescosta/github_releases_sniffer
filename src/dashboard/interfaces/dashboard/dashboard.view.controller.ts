import {useContext, useEffect, useState} from 'react';

import {SniffedRepositoriesContext} from '../../../core/context/sniffed.repositories.context';
import {IGetSnifferReposAndAccountUsecase} from '../../bussiness/usecases/iget.sniffer.repos.and.account.usecase';

export class DashboardViewController {
  public context = useContext(SniffedRepositoriesContext);
  public userAccount: any;
  public setUserAccount: React.Dispatch<React.SetStateAction<any>>;

  constructor(private readonly _getSnifferReposAndAccountUsecase: IGetSnifferReposAndAccountUsecase) {
    [this.userAccount, this.setUserAccount] = useState({});

    useEffect(() => {
      this.getSniffedReposAndAccountIntoCacheAndSetGlobalContext();
    }, []);
  }

  private async getSniffedReposAndAccountIntoCacheAndSetGlobalContext() {
    const result = await this._getSnifferReposAndAccountUsecase.get();
    this.context.setSniffedRepositories(result.sniffer);
    this.setUserAccount(result.user);
  }
}
