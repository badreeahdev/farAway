export default function Item({ item, onDeleteItem, ontoggleitems }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => ontoggleitems(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
