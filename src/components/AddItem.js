import React, { useReducer, useState } from 'react';

export default function AddItem() {
  //we are going to use useReducer to keep the state of our shopping list items. the initial value is going to have just text to begin with: eggs.

  const itemReducer = () => {
    console.log('that thang');
  };

  const [newItem, setNewItem] = useState('');
  const initialItems = [{ text: 'Eggs' }];
  const [items, dispatch] = useReducer(itemReducer, initialItems);

  const handleAddItem = (e) => {
    e.preventDefault();
    // dispatch({ type: 'ADD_ITEM', payload: { item } });
    console.log(newItem);
  };

  return (
    <>
      <form onSubmit={handleAddItem}>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        ></input>
        <button>Submit</button>
      </form>
    </>
  );
}
