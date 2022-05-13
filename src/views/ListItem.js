import React from 'react';
import { useItems } from '../context/ItemProvider';

export default function ListItem({ item }) {
  const { handleDeleteItem } = useItems();

  return (
    <>
      <div>
        for instance, {item.text} {item.id}
        <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
        <button>Edit</button>
        <input type="checkbox"></input>
      </div>
    </>
  );
}
