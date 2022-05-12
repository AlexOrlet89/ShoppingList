import React from 'react';
import AddItem from '../components/AddItem';

export default function List() {
  return (
    <>
      <h3>Today's list</h3>
      <AddItem />
      <ul></ul>
    </>
  );
}
