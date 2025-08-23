'use client'

//state uchun context yaradildi


import React, { createContext, useState } from 'react';


interface AppContextType {
  isOpenSearchModal: boolean;

  toggleSearchModal: () => void;
}
export const AppContext=createContext<AppContextType | undefined>(undefined)

export const AppProvider:React.FC<{children: React.ReactNode }>= ({ children }) => {
  const [isOpenSearchModal, setIsOpenSearchModal] = useState<boolean>(false);
 
  const toggleSearchModal = () => setIsOpenSearchModal(prev => !prev);

  return (
    <AppContext.Provider
      value={{
        isOpenSearchModal,
       
        toggleSearchModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};