import Item from "./Item";
import { useState } from "react";
export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearAll,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;
  if (sortBy === "alphabetically")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            key={item.id}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by order input</option>
          <option value="alphabetically">Sort alphabetically</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearAll}>Clear Items</button>
      </div>
    </div>
  );
}
