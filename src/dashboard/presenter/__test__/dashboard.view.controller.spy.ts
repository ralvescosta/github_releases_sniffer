import React, {useState, useEffect} from 'react';

import {IDashboardViewController} from '../../interfaces/dashboard/idashboard.view.controller';

export class DashboardViewControllerSpy implements IDashboardViewController {
  public globalContext = {
    sniffedRepositories: [],
    setSniffedRepositories: jest.fn(),
    isNetworkAvailable: true,
    setIsNetworkAvailable: jest.fn(),
  };

  private _isNetworkAvailable: boolean = false;

  public userAccount: any;
  public setUserAccount: React.Dispatch<React.SetStateAction<any>>;

  constructor() {
    [this.userAccount, this.setUserAccount] = useState({});

    useEffect(() => {
      this.getSniffedReposAndAccountIntoCacheAndSetGlobalContext();
    }, []);
  }

  public async getSniffedReposAndAccountIntoCacheAndSetGlobalContext() {}
}
