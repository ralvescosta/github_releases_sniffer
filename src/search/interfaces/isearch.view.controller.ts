export interface ISearchViewController {
  inputValue: string;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  navigation: any;

  onPressSignIn(): Promise<void>;
}
