import React, {createContext, useState} from 'react';
import {SniffedGithubRepositoryEntity} from '../../search/bussiness/entities/sniffed.github.repository.entity';

export const GlobalContext = createContext(null as any);

export const GlobalContextProvider = ({children}: any) => {
  const [sniffedRepositories, setSniffedRepositories] = useState<SniffedGithubRepositoryEntity[]>([]);
  const [isNetworkAvailable, setIsNetworkAvailable] = useState<boolean>(false);

  const defaultContext = {
    sniffedRepositories,
    setSniffedRepositories,
    isNetworkAvailable,
    setIsNetworkAvailable,
  };

  return <GlobalContext.Provider value={defaultContext}>{children}</GlobalContext.Provider>;
};
