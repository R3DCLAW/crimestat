import { useState, useEffect } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Criminal from "./components/Criminal/Criminal";

const App = () => {
  const [criminals, setCriminals] = useState([]);

  return (
    <div className="App">
      <Header />
      <div className="criminals">
        <Criminal />
      </div>
    </div>
  );
};

export default App;
