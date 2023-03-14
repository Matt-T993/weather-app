import axios from "axios";

const BASE_URL = "https://api.openweathermap.org/data/2.5/";
const API_KEY = process.env.REACT_APP_KEY;

const getWeatherData = (infoType, searchParams) => {
  const url = BASE_URL + infoType;
  const params = { ...searchParams, appid: API_KEY };

  return axios.get(url, { params }).then((res) => res.data);
};
