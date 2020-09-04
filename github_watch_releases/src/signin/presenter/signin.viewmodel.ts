import {useRef, useState} from 'react';

export class SingInViewModel {
  public githubUserInputRef = useRef(null);
  public isLoading: boolean;
  public setIsLoading: React.Dispatch<React.SetStateAction<false>>;

  constructor() {
    [this.isLoading, this.setIsLoading] = useState(false);
  }

  public onPressSignIn() {
    console.log(this.githubUserInputRef);
  }
}
