import React, { useState } from 'react';

function CRUDComponent() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  const handleAddItem = () => {
    if (newItem.trim()) {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  const handleDeleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleEditItem = (index) => {
    setIsEditing(true);
    setCurrentItem({ value: items[index], index });
  };

  const handleUpdateItem = () => {
    if (currentItem.value.trim()) {
      const updatedItems = items.map((item, index) =>
        index === currentItem.index ? currentItem.value : item
      );
      setItems(updatedItems);
      setIsEditing(false);
      setCurrentItem(null);
    }
  };

  return (
    <div className="crud-component">
      <input
        type="text"
        value={isEditing ? currentItem?.value : newItem}
        onChange={(e) =>
          isEditing
            ? setCurrentItem({ ...currentItem, value: e.target.value })
            : setNewItem(e.target.value)
        }
        placeholder="Enter item"
      />
      {isEditing ? (
        <button onClick={handleUpdateItem}>Update</button>
      ) : (
        <button onClick={handleAddItem}>Add</button>
      )}

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleEditItem(index)}>Edit</button>
            <button onClick={() => handleDeleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CRUDComponent;