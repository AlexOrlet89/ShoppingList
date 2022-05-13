import React from 'react';
import { useItems } from '../context/ItemProvider';

export default function Header() {
  const { items } = useItems();

  return (
    <>
      <h3>My Shopping List</h3>
      <h3>Total Items {items.length} </h3>
      {/* //items.length */}
      <button>Clear List</button>
      {/* //type: 'CLEAR_LIST' */}
    </>
  );
}
