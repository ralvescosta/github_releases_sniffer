import React, {createContext, useState} from 'react';

export const SniffedRepositoriesContext = createContext(null as any);

export const SniffedRepositoriesContextProvider = ({children}: any) => {
  const [sniffedRepositories, setSniffedRepositories] = useState([]);

  const defaultContext = {
    sniffedRepositories,
    setSniffedRepositories,
  };

  return <SniffedRepositoriesContext.Provider value={defaultContext}>{children}</SniffedRepositoriesContext.Provider>;
};
