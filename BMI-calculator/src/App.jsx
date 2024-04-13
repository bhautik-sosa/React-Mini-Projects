import { useMemo, useState } from "react";
import "./App.css";

function App() {
  const [height, setHeight] = useState(70);
  const [weight, setWeight] = useState(40);

  const onWeightChange = (event) => {
    setWeight(event.target.value);
  };
  const onHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const output = useMemo(() => {
    const calHeight = height / 100; // Converting height to meters
    return weight / (calHeight * calHeight); // Corrected calculation
  }, [weight, height]).toFixed(1);

  return (
    <main>
      <h1> BMI Calculator</h1>
      <div className="input-section">
        <p className="slider-input">Weight : {weight} Kg</p>
        <input
          type="range"
          className="input-slider"
          id="inp1"
          min={40}
          max={200}
          onChange={onWeightChange}
        />

        <p className="slider-output">Height : {height} cm</p>
        <input
          type="range"
          className="input-slider"
          onChange={onHeightChange}
          min={140}
          max={220}
        />
      </div>
      <div className="output-section">
        <p>
          {" "}
          Your BMI is : <span className="output">{output}</span>{" "}
        </p>
      </div>
    </main>
  );
}

export default App;
