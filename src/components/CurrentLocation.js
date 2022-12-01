import { useState, useEffect } from "react";
import axios from "axios";
import Weather from "./weather/Weather";

const CurrentLocation = () => {
  const [lat, setLat] = useState([]);
  const [long, SetLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const CurrLocWeatherUrl = `${process.env.REACT_APP_BASE}weather?lat=${lat}&lon=${long}&units=metric&appid=${process.env.REACT_APP_KEY}`;
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        SetLong(position.coords.longitude);
      });
      axios.get(CurrLocWeatherUrl).then((response) => {
        setData(response.data);
        console.log("Current Weather", response.data);
      });
    };
    fetchData();
  }, [lat, long]);

  return (
    <>
      <h1>Current Location</h1>
      <Weather data={data} />
    </>
  );
};

export default CurrentLocation;
