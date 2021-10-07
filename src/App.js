import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Criminal from "./components/Criminal/Criminal";
import Infochart from "./components/Infochart/Infochart";
import Data from "./db.json";

const App = () => {
  // State to open and close the overlay
  const [infochart, setInfochart] = useState(false);
  // State to determine the current criminal for overlay
  const [criminal, setCriminal] = useState();
  //Funtion to open the overlay while passing the corresponding information.
  const toggleInfochart = (index) => () => {
    setCriminal(Data[index]);
    setInfochart(!infochart);
  };

  return (
    <div className="App">
      <Header />
      <div className="criminals">
        {/*Display the criminals on main page and on overlay with corresponding information*/}
        {Data.map((criminalData, index) => {
          return (
            <Criminal
              toggleInfochart={toggleInfochart(index)}
              key={criminalData.id}
              title={criminalData.title}
              description={criminalData.description}
              image={criminalData.image}
            />
          );
        })}
        {infochart && (
          <Infochart
            closeInfochart={() => setInfochart(false)}
            title={criminal.title}
          />
        )}
      </div>
    </div>
  );
};

export default App;
