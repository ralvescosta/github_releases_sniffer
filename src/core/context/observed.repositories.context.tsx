import React, {createContext, useState} from 'react';

export const ObservedRepositoriesContext = createContext(null as any);

export const ObservedRepositoriesContextProvider: React.FC = ({children}) => {
  const [observedRepositories, setObservedRepositories] = useState([]);

  const defaultContext = {
    observedRepositories,
    setObservedRepositories,
  };

  return <ObservedRepositoriesContext.Provider value={defaultContext}>{children}</ObservedRepositoriesContext.Provider>;
};
