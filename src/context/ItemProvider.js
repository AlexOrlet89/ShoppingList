import React, { createContext, useContext, useReducer } from 'react';

const initialItems = [{ id: Date.now(), text: 'Eggs' }];

const itemReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [{ text: action.payload.text }, ...state];
    case 'DELETE_ITEM':
      console.log('DELETE_ITEM');
      console.log(state, action);
    default:
      return state;
    //   return state.filter((item) => item.id !== action.payload.id);
  }
};

const ItemContext = createContext();
export const ItemProvider = ({ children }) => {
  const [items, dispatch] = useReducer(itemReducer, initialItems);

  const handleAddItem = (text) => {
    dispatch({ type: 'ADD_ITEM', payload: { text } });
  };
  const handleDeleteItem = (id) => {
    dispatch({ type: 'DELETE_ITEM', payload: { id } });
  };

  return (
    <ItemContext.Provider value={{ items, handleAddItem, handleDeleteItem }}>
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
