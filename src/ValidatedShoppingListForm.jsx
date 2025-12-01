import { useState } from "react";

const ValidatedShoppingListForm = ({ addItem }) => {
  const [formData, setFormData] = useState({ product: "", quantity: 0 });
  const [productIsValid, setProductIsValid] = useState(false);

  const validate = (product) => {
    if (product.length === 0) {
      setProductIsValid(false);
    } else {
      setProductIsValid(true);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "product") {
      validate(e.target.value);
    }
    setFormData((currData) => {
      return {
        ...currData,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (productIsValid) {
      addItem(formData);
      setFormData({ product: "", quantity: 0 });
    }
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
      {!productIsValid && (
        <p style={{ color: "red" }}>商品名を空にすることはできません</p>
      )}
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

export default ValidatedShoppingListForm;
