import React from 'react'

const CityContent = ({hourly, data, forecast}) => {
    const WEEK_DAYS = [
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
        "Sun",
      ];

    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
      WEEK_DAYS.slice(0, dayInAWeek)
    );
    const forecastday = hourly?.forecast?.forecastday;

    const capitaliseFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
      };
  return (
    <div className='cityContent'>
       <div className="cityContent-weather">
          <div className="cityContent-left">
            <div className="cityContent-name">
        <h2 className="desc name">{data.name}</h2>
        <p>Chance of rain: 0%</p>
        </div>

        <div className="cityContent-temp">
          {data.main ? (
            <h1 className="temp">{data.main.temp.toFixed()}°C</h1>
          ) : null}
        </div>
        </div>
        <div className="cityContent-right">
        {data.weather ? (
            <img
              alt="weather"
              className="weather-icon"
              src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            />
          ) : null}
            {data.weather ? <p className="desc cityContent-type">{capitaliseFirstLetter(data.weather[0].main)}</p> : null}
          </div>
        </div>
       
        <div className="cityContent-hourly">
      <p>Today's Forecast</p>
      <div className="cityContent-grid-hourly">
        
        {forecastday && forecastday[0]?.hour
          ? forecastday[0].hour.slice(0, 3).map(item => {
              const dateTime = new Date(item.time);
              const hourFormatted = dateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

              return (
                <div className="cityContent-daily-hourly" key={item.time}>
                  <p>{hourFormatted}</p>
                  <img
                    src={item.condition.icon}
                    className="hourly-icon"
                    alt="weather"
                  />
                  <p>
                    {Math.round(item.temp_c)}°C
                  </p>
                </div>
              );
            })
          : null}
      </div>
    </div> 
    <div className="cityContent-forecast">
        <p>3-day Forecast</p>
        <div className="cityContent-grid-forecast">
          {forecast.list
            ? forecast.list.slice(0, 3).map((item, idx) => (
                <div key={item.dt} className="cityContent-daily-forecast">
                  <p className="cityContent-forecast-text">{forecastDays[idx]}</p>
                  <div className="cityContent-forecast-center"> 
                  <img
                    src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                    className="icon"
                    alt="weather"
                  />
                  <p>{item.weather[0].main}</p>
                  </div>
                  <p className="cityContent-forecast-text">
                    {Math.round(item.main.temp_min)}/{Math.round(item.main.temp_max)}
                  </p>
                </div>
              ))
            : null}
        </div>
      </div>
        </div>

    
    
  )
}

export default CityContent