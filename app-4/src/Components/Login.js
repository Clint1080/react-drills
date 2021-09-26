import React, { useState } from "react";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [userPass, setUserPass] = useState("");
  const handleUser = (e) => {
    setUserName(e.target.value);
  };
  const handlePass = (e) => {
    setUserPass(e.target.value);
  };

  const handleClick = (userName, userPass) => {
    setUserName("");
    setUserPass("");
    return alert(`User name:${userName} and User pass:${userPass}`);
  };

  return (
    <div>
      <input
        value={userName}
        type="text"
        placeholder="User Name"
        onChange={handleUser}
      />
      <input
        value={userPass}
        type="text"
        placeholder="Password"
        onChange={handlePass}
      />
      <button
        onClick={() => {
          handleClick(userName, userPass);
        }}
      >
        Push me daddy
      </button>
    </div>
  );
};

export default Login;
