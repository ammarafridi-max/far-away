import { useState } from "react";
import Stats from "./Stats";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import DateCounter from "./DateCounter";
import DateCounter2 from "./DateCounter2";
import BankAccount from "./BankAccount";

const initialItems = [
  {
    id: 1,
    description: "Passports",
    quantity: 2,
    packed: false,
  },
  {
    id: 2,
    description: "Socks",
    quantity: 12,
    packed: false,
  },
];

function App() {
  const [items, setItems] = useState(initialItems);

  function handleAddItems(newItem) {
    setItems((prevItems) => [...prevItems, newItem]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleUpdateItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm("Confirm deleting all items?");
    if (confirmed) return setItems([]);
  }

  return (
    <div className="App">
      <Logo />
      <Form onAddItem={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onUpdateItem={handleUpdateItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

// function App() {
//   return <BankAccount />;
// }

export default App;
