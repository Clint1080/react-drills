import React, { useState } from "react";
import "./App.css";
import Filtered from "./components/Filtered";
import UserInput from "./components/UserInput";

function App() {
  const [filteredArr, setfilteredArr] = useState([]);
  const [userInput, setuserInput] = useState("");

  const [arr] = useState(["american", "swiss", "gouda", "provolone"]);

  const handleFilter = (e) => {
    setuserInput(e);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Filtered string={userInput} data={arr} />
        <UserInput onChange={(e) => handleFilter(e.target.value)} />
      </header>
    </div>
  );
}

export default App;
