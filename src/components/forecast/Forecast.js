import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
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
      <div className="container">
        <div className="forecast">
          {data.list ? <label className="title">Daily Forecast</label> : null}
          {data.list
            ? data.list.slice(0, 7).map((item, idx) => (
                <div className="daily-forecast">
                  <Accordion>
                    <AccordionSummary>
                      <Typography className="weather-list">
                        <img
                          src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                          className="icon"
                          alt="weather"
                        />
                        <label className="day">{forecastDays[idx]}</label>
                        <label className="description">
                          {item.weather[0].description}
                        </label>
                        <label className="min-max">
                          {Math.round(item.main.temp_max)}°C /
                          {Math.round(item.main.temp_min)}°C
                        </label>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <div className="daily-details-grid">
                          <div className="daily-details-item">
                            <label>Pressure:</label>
                            <label>{item.main.pressure}</label>
                          </div>
                          <div className="daily-details-item">
                            <label>Humidity:</label>
                            <label>{item.main.humidity}%</label>
                          </div>
                          <div className="daily-details-item">
                            <label>Clouds:</label>
                            <label>{item.clouds.all}%</label>
                          </div>
                          <div className="daily-details-item">
                            <label>Wind speed:</label>
                            <label>{item.wind.speed} m/s</label>
                          </div>
                          <div className="daily-details-item">
                            <label>Sea level:</label>
                            <label>{item.main.sea_level}m</label>
                          </div>
                          <div className="daily-details-item">
                            <label>Feels like:</label>
                            <label>{item.main.feels_like}°C</label>
                          </div>
                        </div>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              ))
            : null}
        </div>
      </div>
    </>
  );
};

export default Forecast;
