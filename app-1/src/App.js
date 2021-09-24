import React, { useState } from "react";

import "./App.css";

function App() {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.target.value);
    console.log(userInput);
  };

  return (
    <div className="App">
      <div className="Container">
        <header className="App-header">This is App 1</header>
        <h4>Type some shit in the box</h4>
        <input type="text" className="inputLine" onChange={handleChange} />
        <br />
        <span className="resultsBox">{userInput}</span>
      </div>
    </div>
  );
}

export default App;
