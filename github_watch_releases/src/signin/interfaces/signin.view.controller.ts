import {useState} from 'react';
import {ISignInUsecase} from '../bussiness/usecases/isignin.usecase';
import {useNavigation} from '@react-navigation/native';
import {ICheckUserIsLoggedUsecase} from '../bussiness/usecases/icheck.user.is.logged.usecase';

export class SingInViewController {
  public inputValue: string;
  public isLoading: boolean;
  public setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  public navigation: any;

  constructor(private readonly signInUsecase: ISignInUsecase, private readonly checkUserIsLoggedUseCase: ICheckUserIsLoggedUsecase) {
    this.inputValue = '';
    this.navigation = useNavigation();
    [this.isLoading, this.setIsLoading] = useState<boolean>(false);

    // useLayoutEffect(() => {
    //   this.checkUserIsLogged();
    // }, []);
  }

  private async checkUserIsLogged() {
    const isLogged = this.checkUserIsLoggedUseCase.check();

    if (isLogged) {
      this.navigation.navigate('dashboard');
    }
  }

  public async onPressSignIn() {
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
