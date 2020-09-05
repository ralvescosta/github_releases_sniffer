import React from 'react';
import {SignInScreen} from './presenter/signin.screen';

import {GithubSearchUserRepository} from './infrastructure/repositories/github.search.user.repository';
import {SingInViewController} from './interfaces/signin.view.controller';
import {LocalDatabaseRepository} from './infrastructure/repositories/local.database.repository';
import {SignInUsecases} from './application/usecases/signin.usecases';
import {CheckUserIsLoggedUsecase} from './application/usecases/check.user.is.logged.usecase';

export const WarperSignInScreen: React.FC = () => {
  const githubFindUserRepository = new GithubSearchUserRepository();
  const localDatabaseRepository = new LocalDatabaseRepository();
  const signInUsecases = new SignInUsecases(githubFindUserRepository, localDatabaseRepository);
  const checkUserIsLoggedUsecase = new CheckUserIsLoggedUsecase(localDatabaseRepository);
  const singInViewController = new SingInViewController(signInUsecases, checkUserIsLoggedUsecase);

  return <SignInScreen viewController={singInViewController} />;
};
