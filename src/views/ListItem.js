import React, { useState } from 'react';
import { useItems } from '../context/ItemProvider';

export default function ListItem({ item }) {
  const { handleDeleteItem, handleEditItem } = useItems();
  const [isEditing, setIsEditing] = useState(false);

  const handleEditButton = () => {
    setIsEditing(true);
  };

  let content;

  if (isEditing) {
    content = (
      <form>
        <input
          value={item.text}
          onChange={() => handleEditItem(item.id, item.text)}
        />
        <button>Save</button>
      </form>
    );
  } else {
    content = <>{item.text}</>;
  }

  return (
    <>
      <div>
        {/* for instance, {item.text} {item.id} */}
        {content}
        <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
        <button onClick={handleEditButton}>Edit</button>
        <input type="checkbox"></input>
      </div>
    </>
  );
}
