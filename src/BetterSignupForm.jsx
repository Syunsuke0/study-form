import { useState } from "react";

const BetterSignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
  });

  const handleChange = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;
    setFormData((currData) => {
      currData[fieldName] = value;
      return { ...currData };
    });
  };
  const handleSubmit = () => {
    console.log(formData);
  };
  return (
    <div>
      <label htmlFor="lastName">性</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        placeholder="山田"
        value={formData.lastName}
        onChange={handleChange}
      />
      <label htmlFor="firstName">名</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        placeholder="太郎"
        value={formData.firstName}
        onChange={handleChange}
      />
      <label htmlFor="password">パスワード</label>
      <input
        id="password"
        name="password"
        type="password"
        placeholder="パスワード"
        value={formData.password}
        onChange={handleChange}
      />

      <button onClick={handleSubmit}>送信</button>
    </div>
  );
};

export default BetterSignupForm;
