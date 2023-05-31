// App.js
import React, { useEffect, useState } from 'react';
import { fetchItems, createItem, updateItem, deleteItem } from './Api';

const App = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    fetchItems()
      .then((data) => setItems(data))
      .catch((error) => console.log("hello", error));
  }, []);

  const handleCreate = () => {
    const newItem = {
      name,
      description,
    };

    createItem(newItem)
      .then((createdItem) => {
        setItems([...items, createdItem]);
        setName('');
        setDescription('');
      })
      .catch((error) => console.log(error));
  };

  const handleUpdate = (id) => {
    console.log("id ", id)
    const updatedItem = {
      name,
      description,
    };

    updateItem(id, updatedItem)
      .then((updatedItem) => {
        setItems(items.map((item) => (item.id === updatedItem.id ? updatedItem : item)));
        setName('');
        setDescription('');
      })
      .catch((error) => console.log(error));
  };

  const handleDelete = (id) => {
    deleteItem(id)
      .then(() => {
        setItems(items.filter((item) => item.id !== id));
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>CRUD App</h1>

      {/* Create Form */}
      <h2>Create Item</h2>
      <form onSubmit={handleCreate}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>

      {/* Items List */}
      <h2>Items</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <button onClick={() => handleUpdate(item.id)}>Update</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
