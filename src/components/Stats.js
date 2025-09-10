export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <p>
          <em>Start adding some items to pack 🚀</em>
        </p>
      </footer>
    );

  const itemLength = items.length;
  const packed = items.filter((item) => item.packed).length;
  const percent = Math.round((packed / itemLength) * 100);

  return (
    <footer className="stats">
      <em>
        {percent === 100
          ? `You have packed everything!`
          : `🧳You have ${itemLength} items on your list and have already packed
        ${packed} (${percent}%)`}
      </em>
    </footer>
  );
}
