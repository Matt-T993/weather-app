import axios from "axios";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import Forecast from "../components/forecast/Forecast";
import Weather from "../components/weather/Weather";
import Button from "../components/Button";

const Location = (data, setData, forecast, setForecast) => {
  const [show, setShow] = useState(true);
  const [location, setLocation] = useState("");

  // forecast and weather URL
  const currentWeatherUrl = `${process.env.REACT_APP_BASE}weather?q=${location}&units=metric&appid=${process.env.REACT_APP_KEY}`;
  const forcastWeatherUrl = `${process.env.REACT_APP_BASE}forecast?q=${location}&units=metric&appid=${process.env.REACT_APP_KEY}`;

  // get the currentweather and forecast of the location
  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(currentWeatherUrl).then((response) => {
        setData(response.data);
        console.log("weather", response.data);
      });
      axios.get(forcastWeatherUrl).then((response) => {
        setForecast(response.data);
        console.log("forecast", response.data);
      });

      setLocation("");
    }
  };
  return (
    <>
      <div className="wrapper">
        <SearchBar
          location={location}
          setLocation={setLocation}
          search={searchLocation}
          data={data}
        />

        <Button data={data} setShow={setShow} />
        {show
          ? data && <Weather data={data} />
          : forecast && <Forecast data={forecast} />}
      </div>
    </>
  );
};

export default Location;
