import React from 'react';

export default function ListItem({ item }) {
  console.log(item);

  return <div>for instance, {item.text}</div>;
}
