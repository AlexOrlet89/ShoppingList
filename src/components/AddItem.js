import React, { useState } from 'react';
import { useItems } from '../context/ItemProvider';

export default function AddItem() {
  //we are going to use useReducer to keep the state of our shopping list items. the initial value is going to have just text to begin with: eggs.

  const [newItem, setNewItem] = useState('');
  const { handleAddItem } = useItems();

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch({ type: 'ADD_ITEM', payload: { item } });
    handleAddItem(newItem);
    setNewItem('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Add a new item"
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        ></input>
        <button>Submit</button>
      </form>
    </>
  );
}
