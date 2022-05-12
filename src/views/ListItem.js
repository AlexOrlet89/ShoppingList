import React from 'react';

export default function ListItem({ item }) {
  //   console.log(item);

  return (
    <>
      <div>
        for instance, {item.text}
        <button>Delete</button>
        <button>Edit</button>
        <input type="checkbox"></input>
      </div>
    </>
  );
}
