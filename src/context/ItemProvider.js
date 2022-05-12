import React, { createContext, useContext } from 'react';

const initialItems = [{ text: 'Eggs' }];

const itemReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      console.log(state, action);
  }
};

const ItemContext = createContext();
export const ItemProvider = ({ children }) => {
  const [items, dispatch] = useReducer(itemReducer, initialItems);

  const handleAddItem = (text) => {
    dispatch({ type: 'ADD_ITEM', payload: { text } });
  };

  return (
    <ItemContext.Provider value={{ items, handleAddItem }}>
      {children}
    </ItemContext.Provider>
  );
};

export const useItems = () => {
  const context = useContext(ItemContext);

  if (context === undefined)
    throw new Error('Must be called from within a provider');

  return context;
};
