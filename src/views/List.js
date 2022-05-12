import React from 'react';
import AddItem from '../components/AddItem';
import { useItems } from '../context/ItemProvider';
import ListItem from './ListItem';

export default function List() {
  const { items } = useItems();
  return (
    <>
      <h3>Today's list</h3>
      <AddItem />
      <ul>
        {items.map((item) => (
          <li key={item.text}>
            <ListItem item={item} />
          </li>
        ))}
      </ul>
    </>
  );
}
