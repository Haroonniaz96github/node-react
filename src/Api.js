// api.js
const API_BASE_URL = 'http://localhost:3001/api';

// Fetch all items
export const fetchItems = () => {
  return fetch(`${API_BASE_URL}/items`).then((response) => response.json());
};

// Create a new item
export const createItem = (item) => {
  return fetch(`${API_BASE_URL}/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(item),
  }).then((response) => response.json());
};

// Update an existing item
export const updateItem = (id, item) => {
  return fetch(`${API_BASE_URL}/items/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(item),
  }).then((response) => response.json());
};

// Delete an item
export const deleteItem = (id) => {
  console.log("delete it", id)
  return fetch(`${API_BASE_URL}/items/${id}`, {
    method: 'DELETE',
  }).then((response) => response.json());
};
