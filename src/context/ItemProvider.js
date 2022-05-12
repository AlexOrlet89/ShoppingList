import React, { createContext } from 'react';

const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  return <ItemContext.Provider>{children}</ItemContext.Provider>;
};
