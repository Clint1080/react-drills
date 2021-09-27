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
    let list = [...task];
    list.push(e);
    setTask(list);
    console.log(list);
  };

  return (
    <div className="App">
      <header className="App-header">
        <input onChange={handleChange} placeholder="Enter something to do" />
        <button onClick={() => handleClick(userInput)}>add</button>
        <ToDo taskImport={task} />
      </header>
    </div>
  );
}

export default App;
