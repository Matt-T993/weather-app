import "./App.css";
import axios from "axios";
import { useState } from "react";
import Moment from "moment";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const formatDate = Moment().format("MMMM Do YYYY");

  // const code = {
  //   key: "9fdc425d5bbccdd4ec68f66ab6ee47ef",
  //   base: "https://api.openweathermap.org/data/2.5/",
  // };

  const url = `${process.env.REACT_APP_BASE}weather?q=${location}&units=metric&appid=${process.env.REACT_APP_KEY}`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
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
      <h1 className="title">Weather App</h1>
      <div className="search">
        <input
          className="search-bar"
          placeholder="Enter Location"
          type="text"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
        />
      </div>
      <div className="wrapper">
        <div className="top">
          <h1>Today's Weather</h1>
          <p>{formatDate}</p>
        </div>
        <hr />
        <div className="temperture">
          <h2>{data.name}</h2>
          {data.main ? (
            <h1 className="temp">{data.main.temp.toFixed()}°C</h1>
          ) : null}
          {data.weather ? <p>{data.weather[0].main}</p> : null}
          {data.main ? (
            <p>Feels like {data.main.feels_like.toFixed()}°C</p>
          ) : null}
        </div>
        <div className="bottom">
          {/* <div className="description">
            {data.weather ? <h1>{data.weather[0].description}</h1> : null}
          </div> */}

          <div className="extra">
            <div className="humidity">
              {data.main ? <p>Humidity: {data.main.humidity}%</p> : null}
            </div>
            {data.wind ? (
              <div className="wind">Wind: {data.wind.speed.toFixed()}km/h</div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
