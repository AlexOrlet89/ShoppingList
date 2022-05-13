import React from 'react';
import AddItem from '../components/AddItem';
import { useItems } from '../context/ItemProvider';
import ListItem from './ListItem';

export default function List() {
  const { items, handleDeleteItem } = useItems();
  return (
    <>
      <h3>Today's list</h3>
      <AddItem />
      <ul>
        {items.map((item) => (
          <li placeholder="List Item" key={item.id}>
            <ListItem item={item} />
          </li>
        ))}
      </ul>
    </>
  );
}
