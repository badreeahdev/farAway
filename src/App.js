import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import Item from "./Item";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handelItems(item) {
    setItems((items) => [...items, item]);
  }

  function handelDeletItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handelToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handelResetItems() {
    const confirmed = window.confirm("Are you sure to delet all items?");
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handelItems} />
      <PackingList
        item={items}
        onDeleteItem={handelDeletItems}
        ontoggleitems={handelToggleItem}
        onResetItems={handelResetItems}
      />
      <Stats items={items} />
    </div>
  );
}
