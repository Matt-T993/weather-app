import React from "react";
import Moment from "moment";
import "../App.css";

const Weather = ({ data }) => {
  const formatDate = Moment().format("MMMM Do YYYY");
  return (
    <>
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
    </>
  );
};

export default Weather;
