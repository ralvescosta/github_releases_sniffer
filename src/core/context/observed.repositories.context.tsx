import React, {createContext, useState} from 'react';

export const Context = createContext(null as any);

export const ObservedRepositoriesContextProvider: React.FC = ({children}) => {
  const [observedRepositories, setObservedRepositories] = useState([]);

  const defaultContext = {
    observedRepositories,
    setObservedRepositories,
  };

  return <Context.Provider value={defaultContext}>{children}</Context.Provider>;
};
