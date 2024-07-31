export default function Stats({ items }) {
  const numItems = items.length;
  const numItemsPacked = items.filter((item) => item.packed === true).length;
  const percentage = (numItemsPacked / numItems) * 100;

  return (
    <footer className="stats">
      {numItems === 0 && `Start adding some items to your list`}
      {percentage === 100 && `You have packed everything!`}
      {percentage !== 100 &&
        `You have ${numItems} items on your list, and you already packed
        ${numItemsPacked} (${percentage}%)`}
    </footer>
  );
}
