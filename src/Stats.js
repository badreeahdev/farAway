export default function Stats({ items }) {
  {
    if (!items.length)
      return (
        <p className="stats">
          {" "}
          <em>Start adding item to your list </em>
        </p>
      );
  }
  const numItem = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItem) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "you got everything ready to go"
          : ` You have ${numItem} items on your list, and you are already packed${" "}
        ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
