import { useState } from "react";
import ShoppingListForm from "./ShoppingListForm";
import { v4 as uuid } from "uuid";

const ShoppingList = () => {
  const [items, setItems] = useState([
    { id: uuid(), product: "バナナ", quantity: 8 },
    { id: uuid(), product: "卵", quantity: 12 },
  ]);

  const addItem = (item) => {
    setItems((prevItems) => {
      return [...prevItems, { ...item, id: uuid() }];
    });
  };

  return (
    <div>
      <h1>買い物リスト</h1>
      <ul>
        {items.map((i) => (
          <li key={i.id}>
            {i.product} - {i.quantity}
          </li>
        ))}
      </ul>
      <ShoppingListForm addItem={addItem} />
    </div>
  );
};

export default ShoppingList;
