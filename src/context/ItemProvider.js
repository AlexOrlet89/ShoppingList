import React, { createContext, useContext, useReducer } from 'react';

const initialItems = [
  { id: Date.now(), text: 'Eggs', bought: false },
  { id: 2, text: 'Bread', bought: false },
];

const itemReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        { id: Date.now(), text: action.payload.text, bought: false },
        ...state,
      ];
    case 'DELETE_ITEM':
      console.log('DELETE_ITEM', action.payload.id);
      return state.filter((item) => item.id !== action.payload.id);
    case 'EDIT_ITEM':
      // console.log('editing is working', action.payload.id, action.payload.text);
      return state.map((item) => {
        if (item.id === action.payload.item.id) {
          console.log(item, action.payload.item);
          return {
            ...item,
            text: action.payload.item.text,
            bought: action.payload.item.bought,
          };
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
  const handleEditItem = (item) => {
    dispatch({ type: 'EDIT_ITEM', payload: { item } });
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
