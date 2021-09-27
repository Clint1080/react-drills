import React, { useState } from "react";
import "./App.css";
import ToDo from "./components/ToDo";

function App() {
  const [userInput, setUserInput] = useState("");
  const [task, setTask] = useState([]);

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleClick = (e) => {
    setUserInput("");
    let list = [...task];
    list.push(e);
    setTask(list);
  };

  return (
    <div className="App">
      <header className="App-header">
        <input
          value={userInput}
          onChange={handleChange}
          placeholder="Enter something to do"
        />
        <button onClick={() => handleClick(userInput)}>add</button>
        <ToDo taskImport={task} />
      </header>
    </div>
  );
}

export default App;
