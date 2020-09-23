import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {ISignInUsecase} from '../bussiness/usecases/isignin.usecase';
import {ISingInViewController} from './isignin.view.controller';

export class SingInViewController implements ISingInViewController {
  public inputValue: string;
  public isLoading: boolean;
  public setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  public navigation: any;

  constructor(private readonly _signInUsecase: ISignInUsecase) {
    this.inputValue = '';
    this.navigation = useNavigation();
    [this.isLoading, this.setIsLoading] = useState<boolean>(false);
  }

  public async onPressSignIn(): Promise<void> {
    if (!this.inputValue) {
      throw new Error();
    }
    this.setIsLoading(true);
    try {
      await this._signInUsecase.signin(this.inputValue);
      this.navigation.navigate('dashboard');
    } catch (err) {
      this.setIsLoading(false);
      throw new Error();
    }
  }
}
