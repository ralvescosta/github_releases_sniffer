import React, {useState, useRef} from 'react';
import {ICheckUserIsLoggedUsecase} from '../bussiness/usecases/icheck.user.is.logged.usecase';

export class CheckUserLoggedViewController {
  public isLoading: boolean;
  public setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  public isUserLogged: React.MutableRefObject<boolean>;

  constructor(private readonly checkUserIsLoggedUseCase: ICheckUserIsLoggedUsecase) {
    [this.isLoading, this.setIsLoading] = useState<boolean>(true);
    this.isUserLogged = useRef<boolean>(false);

    this.checkUserIsLogged();
  }

  private async checkUserIsLogged() {
    const userAccount = await this.checkUserIsLoggedUseCase.check();

    if (userAccount) {
      this.isUserLogged.current = true;
    }

    this.setIsLoading(false);
  }
}
