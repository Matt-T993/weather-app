import React from "react";
import Moment from "moment";
import "./weather.css";

const Weather = ({ data }) => {
  const formatDate = Moment().format("MMMM Do YYYY");
  const formatTime = Moment().format("LTS");

  return (
    <>
      <div
        className={typeof data.main != "undefined" ? "weather-wrapper" : null}
      >
        <div className="temperture">
          <h1 className="dateAndTime">
            {formatDate} | {formatTime}
          </h1>
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
      </div>
    </>
  );
};

export default Weather;
