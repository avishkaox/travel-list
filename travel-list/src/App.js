import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
// ];

function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItem(idToDelete) {
    setItems((items) => items.filter((item) => item.id !== idToDelete));
  }
  function handleUpdateItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function clearList() {
    const confirmed = window.confirm("Are you sure to delete all");
    if (confirmed) {
      setItems([]);
    }
  }

  function getPercentage() {
    const totalPacked = items.filter((item) => item.packed === true).length;
    let percentage = 0;
    percentage = (totalPacked / items.length) * 100;
    console.log(percentage);
    return percentage > 0 ? Math.ceil(percentage) : 0;
  }

  return (
    <div className="App">
      <Logo></Logo>
      <Form handleAddItems={handleAddItems}></Form>
      <PackingList
        handleUpdateItem={handleUpdateItem}
        array={items}
        handleDeleteItem={handleDeleteItem}
        clearList={clearList}
      ></PackingList>
      <Stats
        total={items.length}
        percentage={getPercentage}
        totalpacked={items.filter((item) => item.packed === true).length}
      ></Stats>
    </div>
  );
}

export default App;
