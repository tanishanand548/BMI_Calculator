import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // Using State hook in our application
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  // Logic building

  let calcbmi = (e) => {
    e.preventDefault();
    if (weight <= 0 || height <= 0) {
      alert("Please enter valid weight and height");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));

      // underwight or overweight
      if (bmi < 25 && bmi > 0) {
        setMessage("You are underweigth");
      } else if (bmi >= 25 && bmi < 30) {
        setMessage("You are healthy");
      } else {
        setMessage("You are overweight");
      }
    }
  };

  // reload
  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={calcbmi}>
          <div className="inp-field">
            <label for="exampleInputEmail1">Weight(in lbs)</label>
            <input
              type="text"
              placeholder="Enter your weight"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div className="inp-field">
            <label for="exampleInputEmail1">Height(in inch)</label>
            <input
              type="text"
              placeholder="Enter your height"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className="div-btn">
            <button className="btn btn-info" type="submit">
              Submit
            </button>
            <button class="btn btn-info" onClick={reload} type="reload">
              Reload
            </button>
          </div>
          <div className="center">
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
