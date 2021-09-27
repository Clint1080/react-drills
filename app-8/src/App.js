import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const api = async () => {
      const getData = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/jigglypuff"
      );
      setApiData(getData.data.name);
    };
    api();
  }, []);

  return (
    <div className="App">
      <header className="App-header">{apiData}</header>
    </div>
  );
}

export default App;
