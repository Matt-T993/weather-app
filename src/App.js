import "./App.css";
import axios from "axios";
import { useState } from "react";
import SearchBar from "./components/SearchBar";

import Forecast from "./components/Forecast";
import Weather from "./components/Weather";

function App() {
  const [show, setShow] = useState(true);
  const [data, setData] = useState({});
  const [forecast, setForecast] = useState({});
  const [location, setLocation] = useState("");

  // forecast and weather URL
  const currentWeatherUrl = `${process.env.REACT_APP_BASE}weather?q=${location}&units=metric&appid=${process.env.REACT_APP_KEY}`;
  const forcastWeatherUrl = `${process.env.REACT_APP_BASE}forecast?q=${location}&units=metric&appid=${process.env.REACT_APP_KEY}`;

  // get the currentweather and forecast of the location
  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(currentWeatherUrl).then((response) => {
        setData(response.data);
        console.log("weather", response.data);
      });
      axios.get(forcastWeatherUrl).then((response) => {
        setForecast(response.data);
        console.log("forecast", response.data);
      });

      setLocation("");
    }
  };
  return (
    <div
      className={
        typeof data.main != "undefined"
          ? data.main.temp > 16
            ? "app warm"
            : "app cold"
          : "app"
      }
    >
      <button onClick={() => setShow(true)}> Today's Weather</button>
      <button onClick={() => setShow(false)}>Forecast</button>
      <div className="wrapper">
        <SearchBar
          location={location}
          setLocation={setLocation}
          search={searchLocation}
        />
        <hr />
        {show
          ? data && <Weather data={data} />
          : forecast && <Forecast data={forecast} />}
      </div>
    </div>
  );
}

export default App;
