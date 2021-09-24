import React, { useState } from "react";
import "./App.css";

function App() {
  const [arr] = useState(["React", "is", "so", "cool"]);

  return (
    <div className="App">
      <header className="App-header">
        {arr.map((e, i) => {
          return <h2 key={i}>{e}</h2>;
        })}
      </header>
    </div>
  );
}

export default App;
