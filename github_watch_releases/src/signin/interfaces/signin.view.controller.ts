import {useState} from 'react';
import {ISignInUsecases} from '../bussiness/usecases/isignin.usecases';

export class SingInViewController {
  public inputValue: string;
  public isLoading: boolean;
  public setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;

  constructor(private readonly signInUsecases: ISignInUsecases) {
    this.inputValue = '';
    [this.isLoading, this.setIsLoading] = useState<boolean>(false);
  }

  public async onPressSignIn() {
    if (!this.inputValue) {
      throw new Error();
    }
    this.setIsLoading(true);
    try {
      const result = await this.signInUsecases.signin(this.inputValue);
      console.log(result);
    } catch (err) {
      this.setIsLoading(false);
      throw new Error();
    }
  }
}
