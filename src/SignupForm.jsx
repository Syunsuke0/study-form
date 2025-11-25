import { useState } from "react";

const SignupForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const updateLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleSubmit = () => {
    console.log(lastName, firstName);
  };
  return (
    <div>
      <label htmlFor="lastName">性</label>
      <input
        id="lastName"
        type="text"
        placeholder="山田"
        value={lastName}
        onChange={updateLastName}
      />
      <label htmlFor="firstName">名</label>
      <input
        id="firstName"
        type="text"
        placeholder="太郎"
        value={firstName}
        onChange={updateFirstName}
      />

      <button onClick={handleSubmit}>送信</button>
    </div>
  );
};

export default SignupForm;
