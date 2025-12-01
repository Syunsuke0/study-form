import { useState } from "react";
import ShoppingListForm from "./ShoppingListForm";

const ShoppingList = () => {
  const [items, setItems] = useState([
    { id: 1, product: "バナナ", quantity: 8 },
    { id: 2, product: "卵", quantity: 12 },
  ]);

  const addItem = (item) => {
    setItems((prevItems) => {
      return [...prevItems, { ...item, id: 9 }];
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
