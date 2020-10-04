import React from 'react';
import {SignInScreen} from './presenter/signin.screen';

import {HttpClintGithubApiRepository} from './infrastructure/repositories/http.client.github.api.repository';
import {SingInViewController} from './interfaces/signin.view.controller';
import {LocalDatabaseRepository} from './infrastructure/repositories/local.database.repository';
import {SignInUsecases} from './application/usecases/signin.usecases';

export const SignInScreenModule = () => {
  const httpClintGithubApiRepository = new HttpClintGithubApiRepository();
  const localDatabaseRepository = new LocalDatabaseRepository();
  const signInUsecases = new SignInUsecases(httpClintGithubApiRepository, localDatabaseRepository);
  const singInViewController = new SingInViewController(signInUsecases);

  return <SignInScreen viewController={singInViewController} />;
};
