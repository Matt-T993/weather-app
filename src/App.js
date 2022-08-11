import "./App.css";
import axios from "axios";
import { useState } from "react";
import Moment from "moment";
import Forecast from "./components/Forecast";

function App() {
  const [data, setData] = useState({});
  const [forecast, setForecast] = useState({});
  const [location, setLocation] = useState("");

  const formatDate = Moment().format("MMMM Do YYYY");

  const currentWeatherUrl = `${process.env.REACT_APP_BASE}weather?q=${location}&units=metric&appid=${process.env.REACT_APP_KEY}`;
  const forcastWeatherUrl = `${process.env.REACT_APP_BASE}forecast?q=${location}&units=metric&appid=${process.env.REACT_APP_KEY}`;

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
          {data.weather ? <p>{data.weather[0].description}</p> : null}
          {data.weather ? (
            <img
              alt="weather"
              className="weather-icon"
              src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            />
          ) : null}
          {data.main ? (
            <p>Feels like {data.main.feels_like.toFixed()}°C</p>
          ) : null}
        </div>
        <div className="bottom">
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
      <div className="forecast">{forecast && <Forecast data={forecast} />}</div>
    </div>
  );
}

export default App;
