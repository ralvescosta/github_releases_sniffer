import React from 'react';
import {SignInScreen} from './presenter/signin.screen';
import {GithubSearchUserRepository} from './infrastructure/repositories/github.search.user.repository';
import {SignInUsecases} from './application/usecases/signin.usecases';
import {SingInViewController} from './interfaces/signin.view.controller';
import {LocalDatabaseRepository} from './infrastructure/repositories/local.database.repository';

export const WarperSignInScreen: React.FC = () => {
  const githubFindUserRepository = new GithubSearchUserRepository();
  const localDatabaseRepository = new LocalDatabaseRepository();
  const signInUsecases = new SignInUsecases(
    githubFindUserRepository,
    localDatabaseRepository,
  );
  const singInViewController = new SingInViewController(signInUsecases);

  return <SignInScreen viewController={singInViewController} />;
};
