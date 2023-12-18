import React from 'react';

const CityContent = ({
  hourly,
  data,
  forecast,
  changeTempType,
  changeTempTypeMin,
  changeTempTypeMax,
}) => {
  const WEEK_DAYS = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sun',
  ];

  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  const forecastday = hourly?.forecast?.forecastday;

  const capitaliseFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  // Ensure data.list is an array before mapping
  const temperatureValues = Array.isArray(data.list)
    ? data.list.slice(0, 3).map((item) => ({
        min: changeTempTypeMin(item.main.temp_min),
        max: changeTempTypeMax(item.main.temp_max),
      }))
    : [];

  return (
    <div className={data.location ? 'city-Content' : null}>
      <div className="cityContent-weather">
        <div className="cityContent-left">
          <div className="cityContent-name">
            {data.location ? (
              <>
                <h2 className="desc name">{data.location.name}</h2>
                <p>Chance of rain: 0%</p>
              </>
            ) : null}
          </div>

          <div className="cityContent-temp">
            {data.current ? (
              <h1 className="temp">{changeTempType()}</h1>
            ) : null}
          </div>
        </div>
        <div className="cityContent-right">
          {data.current ? (
            <>
              <img
                alt="weather"
                className="weather-icon"
                src={data.current.condition.icon}
              />
              <p className="desc weather-type">
                {capitaliseFirstLetter(data.current.condition.text)}
              </p>
            </>
          ) : null}
        </div>
      </div>

      <div className="cityContent-hourly">
        <p>Today's Forecast</p>
        <div className="cityContent-grid-hourly">
          {forecastday && forecastday[0]?.hour
            ? forecastday[0].hour.slice(0, 3).map((item) => {
                const dateTime = new Date(item.time);
                const hourFormatted = dateTime.toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                });

                return (
                  <div className="cityContent-daily-hourly" key={item.time}>
                    <p>{hourFormatted}</p>
                    <img
                      src={item.condition.icon}
                      className="icon"
                      alt="weather"
                    />
                    <p>{Math.round(item.temp_c)}°C</p>
                  </div>
                );
              })
            : null}
        </div>
      </div>

      <div className="cityContent-forecast">
        <p>3-day Forecast</p>
        <div className="cityContent-grid-forecast">
          {Array.isArray(forecast.list)
            ? forecast.list.slice(0, 3).map((item, idx) => (
                <div key={item.dt} className="cityContent-daily-forecast">
                  <p className="cityContent-forecast-text">
                    {forecastDays[idx]}
                  </p>
                  <div className="cityContent-forecast-center">
                    <img
                      src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                      className="icon"
                      alt="weather"
                    />
                    <p>{item.weather[0].main}</p>
                  </div>
                  <p className="cityContent-forecast-text">
                    {temperatureValues[idx]?.min || ''}/
                    {temperatureValues[idx]?.max || ''}
                  </p>
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default CityContent;
