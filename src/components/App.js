import { useState } from "react";
import Form from "./Form";
import PackingList from "./PackingList";
import Logo from "./Logo";
import Stats from "./Stats";
export default function App() {
  const [items, setItems] = useState([]);

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function clearAll() {
    if (items.length === 0) return;

    const confirmed = window.confirm(
      "Are you sure you want to delete all items from the list?"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearAll={clearAll}
      />
      <Stats items={items} />
    </div>
  );
}
