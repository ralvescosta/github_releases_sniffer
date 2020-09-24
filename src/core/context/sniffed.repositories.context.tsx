import React, {createContext, useState} from 'react';
import {SniffedGithubRepositoryEntity} from '../../search/bussiness/entities/sniffed.github.repository.entity';

export const SniffedRepositoriesContext = createContext(null as any);

export const SniffedRepositoriesContextProvider = ({children}: any) => {
  const [sniffedRepositories, setSniffedRepositories] = useState<SniffedGithubRepositoryEntity[]>([]);

  const defaultContext = {
    sniffedRepositories,
    setSniffedRepositories,
  };

  return <SniffedRepositoriesContext.Provider value={defaultContext}>{children}</SniffedRepositoriesContext.Provider>;
};
