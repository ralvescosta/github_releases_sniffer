import React, {useState, useEffect, useRef} from 'react';
import {ICheckUserIsLoggedUsecase} from '../bussiness/usecases/icheck.user.is.logged.usecase';

export class CheckUserLoggedViewController {
  public isLoading: boolean;
  public setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  public isLogged: React.MutableRefObject<boolean>;

  constructor(private readonly checkUserIsLoggedUseCase: ICheckUserIsLoggedUsecase) {
    [this.isLoading, this.setIsLoading] = useState<boolean>(true);
    this.isLogged = useRef(false);

    useEffect(() => {
      this.checkUserIsLogged();
    }, []);
  }

  private async checkUserIsLogged() {
    const isLogged = await this.checkUserIsLoggedUseCase.check();

    if (isLogged) {
      this.isLogged.current = true;
    }

    this.setIsLoading(false);
  }
}
