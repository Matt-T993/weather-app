import React from "react";
import './hourly.css';

const Hourly = ({ hourly, changeTempType }) => {
  const forecastday = hourly?.forecast?.forecastday;

  return (
    <div className="hourly">
      <p>Today's Forecast</p>
      <div className="grid-hourly">
        {forecastday && forecastday[0]?.hour
          ? forecastday[0].hour.slice(0, 7).map(item => {
              const dateTime = new Date(item.time);
              const hourFormatted = dateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

              return (
                <div className="daily-hourly" key={item.time}>
                  <p>{hourFormatted}</p>
                  <img
                    src={item.condition.icon}
                    className="hourly-icon"
                    alt="weather"
                  />
                  <p>
                    {changeTempType(item.temp_c)}
                  </p>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Hourly;
