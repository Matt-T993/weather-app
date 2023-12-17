import React from "react";
import "./weather.css";


const Weather = ({ data }) => {
  const capitaliseFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    
      <div
        className={typeof data.main != "undefined" ? "weather-wrapper" : null}
      >
        <div className="weather">
          <div className="weather-left">
            <div className="weather-name">
        <h2 className="desc name">{data.name}</h2>
        <p>Chance of rain: 0%</p>
        </div>

        <div className="weather-temp">
          {data.main ? (
            <h1 className="temp">{data.main.temp.toFixed()}°C</h1>
          ) : null}
        </div>
        </div>
        <div className="weather-right">
        {data.weather ? (
            <img
              alt="weather"
              className="weather-icon"
              src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            />
          ) : null}
            {data.weather ? <p className="desc weather-type">{capitaliseFirstLetter(data.weather[0].main)}</p> : null}
          </div>
        </div>
      </div>
    
  );
};

export default Weather;
