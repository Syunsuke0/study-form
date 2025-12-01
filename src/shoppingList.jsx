import { useState } from "react";
import ValidatedShoppingListForm from "./ValidatedShoppingListForm";
import { v4 as uuid } from "uuid";
import RHFForm from "./RHFForm";

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
      {/* <ValidatedShoppingListForm addItem={addItem} /> */}
      <RHFForm addItem={addItem} />
    </div>
  );
};

export default ShoppingList;
