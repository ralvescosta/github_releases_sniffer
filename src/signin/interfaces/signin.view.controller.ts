import {useState} from 'react';
import {ISignInUsecase} from '../bussiness/usecases/isignin.usecase';
import {useNavigation} from '@react-navigation/native';

export class SingInViewController {
  public inputValue: string;
  public isLoading: boolean;
  public setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  public navigation: any;

  constructor(private readonly signInUsecase: ISignInUsecase) {
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
      await this.signInUsecase.signin(this.inputValue);
      this.navigation.navigate('dashboard');
    } catch (err) {
      this.setIsLoading(false);
      throw new Error();
    }
  }
}
