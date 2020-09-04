import {useState} from 'react';

export class SingInViewController {
  public inputValue = '';
  public isLoading: boolean;
  public setIsLoading: React.Dispatch<React.SetStateAction<false>>;

  constructor() {
    [this.isLoading, this.setIsLoading] = useState(false);
  }

  public onPressSignIn() {
    if (!this.inputValue) {
      return false;
    }
    console.log(this.inputValue);
  }
}
