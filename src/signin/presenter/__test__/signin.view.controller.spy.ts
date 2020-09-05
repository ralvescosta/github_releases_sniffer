import {useState} from 'react';

export class SingInViewControllerSpy {
  public inputValue: string;
  public isLoading: boolean;
  public setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  public navigation: any;

  constructor() {
    this.inputValue = '';
    [this.isLoading, this.setIsLoading] = useState<boolean>(false);
  }

  public async onPressSignIn(): Promise<void> {
    this.setIsLoading(true);
  }
}
