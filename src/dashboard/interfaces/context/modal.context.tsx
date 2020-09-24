import React, {createContext, useState} from 'react';

export const ModalContext = createContext(null as any);

export const ModalContextProvider = ({children}: any) => {
  const [toggleModal, setToggleModal] = useState(false);

  const defaultContext = {
    toggleModal,
    setToggleModal,
  };

  return <ModalContext.Provider value={defaultContext}>{children}</ModalContext.Provider>;
};
