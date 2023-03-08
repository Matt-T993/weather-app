import React from "react";

import "./weather.css";

const Weather = ({ data }) => {
  return (
    <>
      <div
        className={typeof data.main != "undefined" ? "weather-wrapper" : null}
      >
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
          <div className="content-list">
            {data.main ? (
              <div className="content">Humidity: {data.main.humidity}%</div>
            ) : null}

            {data.wind ? (
              <div className="content">
                Wind: {data.wind.speed.toFixed()}m/s
              </div>
            ) : null}

            {data.clouds ? (
              <div className="content">Clouds: {data.clouds.all}%</div>
            ) : null}

            {data.main ? (
              <div className="content">Pressure: {data.main.pressure}</div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
