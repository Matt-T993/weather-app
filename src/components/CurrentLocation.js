import { useState, useEffect } from "react";
import axios from "axios";
import Weather from "./weather/Weather";
import Forecast from "./forecast/Forecast";
import Button from "./Button";

const CurrentLocation = () => {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [show, setShow] = useState(true);
  const [data, setData] = useState({});
  const [forecast, setForecast] = useState({});

  //gets the currnt location and forecast weather
  useEffect(() => {
    const CurrLocWeatherUrl = `${process.env.REACT_APP_BASE}weather?lat=${lat}&lon=${long}&units=metric&appid=${process.env.REACT_APP_KEY}`;
    const forcastWeatherUrl = `${process.env.REACT_APP_BASE}forecast?lat=${lat}&lon=${long}&units=metric&appid=${process.env.REACT_APP_KEY}`;

    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
      axios.get(CurrLocWeatherUrl).then((response) => {
        setData(response.data);
        console.log("Current Weather", response.data);
      });
      axios.get(forcastWeatherUrl).then((response) => {
        setForecast(response.data);
        console.log("forecast", response.data);
      });
    };
    fetchData();
  }, [lat, long]);

  return (
    <>
      <div>
        <Button data={data} setShow={setShow} />
        {show
          ? data && <Weather data={data} />
          : forecast && <Forecast data={forecast} />}
      </div>
    </>
  );
};

export default CurrentLocation;
