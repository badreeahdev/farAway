//here is how we render a list
import { useState } from "react";
import Item from "./Item";
export default function PackingList({
  item,
  onDeleteItem,
  ontoggleitems,
  onResetItems,
}) {
  const [sortBy, setSort] = useState("input");

  let sortedItem;

  if (sortBy === "input") sortedItem = item;

  if (sortBy === "description")
    sortedItem = item
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItem = item
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItem.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            key={item.id}
            ontoggleitems={ontoggleitems}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSort(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed stats</option>
        </select>
        <button onClick={onResetItems}>Clear List</button>
      </div>
    </div>
  );
}
