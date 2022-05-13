import React, { useState } from 'react';
import { useItems } from '../context/ItemProvider';

export default function ListItem({ item }) {
  const { handleDeleteItem, handleEditItem } = useItems();
  const [isEditing, setIsEditing] = useState(false);

  const handleEditButton = () => {
    console.log(item);
    setIsEditing(true);
  };

  let content;

  if (isEditing) {
    content = (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setIsEditing(false);
        }}
      >
        <input
          value={item.text}
          onChange={(e) => handleEditItem({ ...item, text: e.target.value })}
        />
        <button>Save</button>
      </form>
    );
  } else {
    content = (
      <p style={{ textDecoration: item.bought ? 'line-through' : null }}>
        {item.text}
      </p>
    );
  }

  return (
    <>
      <div>
        {/* for instance, {item.text} {item.id} */}
        {content}
        <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
        <button onClick={handleEditButton}>Edit</button>
        <input
          placeholder="Bought Checkbox"
          checked={item.bought}
          onChange={(e) => {
            handleEditItem({ ...item, bought: e.target.checked });
          }}
          type="checkbox"
        ></input>
      </div>
    </>
  );
}
