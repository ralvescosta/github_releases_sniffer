export interface IRepoCardViewController {
  switchState: boolean;
  setSwitchState: React.Dispatch<React.SetStateAction<boolean>>;

  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;

  context: any;

  saveRepoToObserver: () => Promise<void>;
}
