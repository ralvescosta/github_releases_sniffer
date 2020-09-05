export interface ICheckUserIsLoggedUsecase {
  check: () => Promise<boolean>;
}
