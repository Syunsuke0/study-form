import { useState } from "react";

const UsernameForm = () => {
  const [username, setUsername] = useState("");
  const updateUsername = (e) => {
    setUsername(e.target.value);
  };
  return (
    <div>
      <label htmlFor="username">ユーザー名の入力</label>
      <input
        id="username"
        type="text"
        placeholder="ユーザー名"
        value={username}
        onChange={updateUsername}
      />
      <button>送信</button>
    </div>
  );
};

export default UsernameForm;
