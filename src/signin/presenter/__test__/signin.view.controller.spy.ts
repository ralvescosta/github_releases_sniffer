import {useState} from 'react';

export class SingInViewControllerSpy {
  public inputValue: string;
  public isLoading: boolean;
  public setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  public navigation: any;

  constructor() {
    this.inputValue = 'some';
    [this.isLoading, this.setIsLoading] = useState<boolean>(false);
  }

  public async onPressSignIn(): Promise<void> {
    if (!this.inputValue) {
      throw new Error();
    }
    this.setIsLoading(true);
  }
}
