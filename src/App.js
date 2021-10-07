import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Criminal from "./components/Criminal/Criminal";
import Infochart from "./components/Infochart/Infochart";
import Data from "./db.json";

const App = () => {
  const [criminals, setCriminals] = useState([]);

  return (
    <div className="App">
      <Header />
      <div className="criminals">
        {Data.map((criminalData) => {
          return (
            <Criminal
              key={criminalData.id}
              title={criminalData.title}
              description={criminalData.description}
              image={criminalData.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
