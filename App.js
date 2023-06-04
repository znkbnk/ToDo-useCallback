import React, { useState, useCallback } from 'react';
import ItemList from './ItemList';
import AddItemForm from './AddItemForm';

function App() {
  const [items, setItems] = useState([]);

  const addItem = useCallback((text) => {
    setItems((prevItems) => [...prevItems, text]);
  }, []);

  return (
    <div>
      <h1>Todo List</h1>
      <ItemList items={items} />
      <AddItemForm addItem={addItem} />
    </div>
  );
}

export default App;
