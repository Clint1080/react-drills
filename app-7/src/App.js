import React, { useState } from "react";
import "./App.css";
import ToDo from "./components/ToDo";
import List from "./components/List";
import NewTask from "./components/NewTask";

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
    console.log(list);
  };
  return (
    <div className="App">
      <header className="App-header">
        <NewTask
          value={userInput}
          onChange={handleChange}
          onClick={() => handleClick(userInput)}
        />
        <List taskImport={task} />
      </header>
    </div>
  );
}

export default App;
