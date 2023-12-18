const Weather = ({ data, changeTempType }) => {
  const capitaliseFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className={data.location ? "weather-wrapper" : null}>
      <div className="weather">
        <div className="weather-left">
          <div className="weather-name">
            {data.location ? (
              <>
                <h2 className="desc name">{data.location.name}</h2>
                <p>Chance of rain: 0%</p>
              </>
            ) : null}
          </div>

          <div className="weather-temp">
            {data.current ? (
              <h1 className="temp">{changeTempType()}</h1>
            ) : null}
          </div>
        </div>
        <div className="weather-right">
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
    </div>
  );
};

export default Weather;
