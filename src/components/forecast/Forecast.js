import * as React from "react";
import "./forecast.css";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  // retrieves the 7 days in the week
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );
  return (
    <>
      <div className="forecast">
        {data.list ? <label className="title">Daily Forecast</label> : null}
        <div className="grid-forecast">
          {data.list
            ? data.list.slice(0, 6).map((item, idx) => (
                <div className="daily-forecast">
                  <label className="day">{forecastDays[idx]}</label>

                  <img
                    src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                    className="icon"
                    alt="weather"
                  />
                  <label className="forecast-temp">
                    {Math.round(item.main.temp)}°C
                  </label>
                </div>
              ))
            : null}
        </div>
      </div>
    </>
  );
};

export default Forecast;
