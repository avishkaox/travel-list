import { useState } from "react";

function PackingList(props) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;

  if (sortBy === "input") {
    sortedItems = props.array;
  } else if (sortBy === "description") {
    sortedItems = props.array
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  } else if (sortBy === "packed") {
    sortedItems = props.array
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
    console.log(sortedItems);
  }
 

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item, index) => (
          <li key={index} id={item.id}>
            <input
              type="checkbox"
              value={item.packed}
              onChange={() => props.handleUpdateItem(item.id)}
            />
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>
              {item.quantity} {item.description}
            </span>
            <button onClick={() => props.handleDeleteItem(item.id)}>❌</button>
          </li>
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input Order</option>
          <option value="description">Sort by Description</option>
          <option value="packed">Sort by packed</option>
        </select>
        <button onClick={props.clearList}>Clear List</button>
      </div>
    </div>
  );
}

export default PackingList;
