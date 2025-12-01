import { useState } from "react";

const ShoppingListForm = ({ addItem }) => {
  const [formData, setFormData] = useState({ product: "", quantity: 0 });
  const handleChange = (e) => {
    setFormData((currData) => {
      return {
        ...currData,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(formData);
    setFormData({ product: "", quantity: 0 });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>
        商品名: {formData.product},数量: {formData.quantity}
      </h1>
      <label htmlFor="product">商品名</label>
      <input
        onChange={handleChange}
        type="text"
        placeholder="商品名"
        name="product"
        id="product"
        value={formData.product}
      />
      <label htmlFor="quantity">数量</label>
      <input
        onChange={handleChange}
        type="number"
        placeholder="数量"
        name="quantity"
        id="quantity"
        value={formData.quantity}
      />
      <button>商品を追加</button>
    </form>
  );
};

export default ShoppingListForm;
