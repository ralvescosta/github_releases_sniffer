import {useContext, useEffect, useState} from 'react';
import NetInfo from '@react-native-community/netinfo';

import {IDashboardViewController} from './idashboard.view.controller';
import {GlobalContext} from '../../../core/context/sniffed.repositories.context';
import {IGetSnifferReposAndAccountUsecase} from '../../bussiness/usecases/iget.sniffer.repos.and.account.usecase';

export class DashboardViewController implements IDashboardViewController {
  public globalContext = useContext(GlobalContext);

  private _isNetworkAvailable: boolean = false;

  public userAccount: any;
  public setUserAccount: React.Dispatch<React.SetStateAction<any>>;

  constructor(private readonly _getSnifferReposAndAccountUsecase: IGetSnifferReposAndAccountUsecase) {
    [this.userAccount, this.setUserAccount] = useState({});

    useEffect(() => {
      this.getSniffedReposAndAccountIntoCacheAndSetGlobalContext();

      const unsubscribe = NetInfo.addEventListener((state) => {
        if (this._isNetworkAvailable !== state.isConnected) {
          this._isNetworkAvailable = state.isConnected;
          this.globalContext.setIsNetworkAvailable(state.isConnected);
        }
      });

      return () => unsubscribe();
    }, []);
  }

  public async getSniffedReposAndAccountIntoCacheAndSetGlobalContext() {
    const result = await this._getSnifferReposAndAccountUsecase.get();
    this.globalContext.setSniffedRepositories(result.sniffer);
    this.setUserAccount(result.user);
  }
}
