import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <GlobalContext.Provider value={{ isOpen, setIsOpen }}>
      <div>{children}</div>
    </GlobalContext.Provider>
  );
};
