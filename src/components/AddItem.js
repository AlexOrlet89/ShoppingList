import React, { useReducer } from 'react';

export default function AddItem() {
  //we are going to use useReducer to keep the state of our shopping list items. the initial value is going to have just text to begin with: eggs.

  const initialItems = [{ text: 'Eggs' }];
  const [items, dispatch] = useReducer(itemReducer, initialItems);

  return (
    <>
      <form>
        <input type="text"></input>
        <button>Submit</button>
      </form>
    </>
  );
}
