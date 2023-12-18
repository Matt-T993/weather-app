import * as React from "react";
import "./forecast.css";

const WEEK_DAYS = [
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
  "Sun",
];


const Forecast = ({ data, changeTempTypeMax, changeTempTypeMin }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  const temperatureValues = data.list
    ? data.list.slice(0, 7).map(item => ({
        min: changeTempTypeMin(item.main.temp_min),
        max: changeTempTypeMax(item.main.temp_max)
      }))
    : [];

  return (
    <div className="forecast">
      <p>7-day Forecast</p>
      <div className="grid-forecast">
        {data.list
          ? data.list.slice(0, 7).map((item, idx) => (
              <div key={item.dt} className="daily-forecast">
                <p className="forecast-text">{forecastDays[idx]}</p>
                <div className="forecast-center"> 
                  <img
                    src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                    className="icon"
                    alt="weather"
                  />
                  <p>{item.weather[0].main}</p>
                </div>
                <p className="forecast-text">
                  {temperatureValues[idx].min}/{temperatureValues[idx].max}
                </p>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Forecast;
