import React, { createContext, useContext, useReducer } from 'react';

const initialItems = [
  { id: Date.now(), text: 'Eggs' },
  { id: 2, text: 'Bread' },
];

const itemReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [{ text: action.payload.text }, ...state];
    case 'DELETE_ITEM':
      console.log('DELETE_ITEM', action.payload.id);
      return state.filter((item) => item.id !== action.payload.id);
    case 'EDIT_ITEM':
      state.map((item) => {
        if (item.id === action.payload.item.id) {
          const { text } = action.payload.item.text;
          return { ...item, text };
        }
        return item;
      });
    default:
      console.log('nothing happened, boss');
    //   return state;
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
  const handleEditItem = (id, text) => {
    dispatch({ type: 'EDIT_ITEM', payload: { id, text } });
  };
  return (
    <ItemContext.Provider
      value={{ items, handleAddItem, handleDeleteItem, handleEditItem }}
    >
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
