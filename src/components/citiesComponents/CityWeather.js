// CityWeather.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './cities.css'

const CityWeather = ({ city , setLocation}) => {
  const [cityWeather, setCityWeather] = useState(null);

  const currentWeatherUrl = `${process.env.REACT_APP_BASE}weather?q=${city.name}&units=metric&appid=${process.env.REACT_APP_KEY}`;

  const getCurrentWeather = async () => {
    try {
      const response = await axios.get(currentWeatherUrl);
      setCityWeather(response.data);
    } catch (error) {
      console.error(`Error fetching current weather for ${city.name}:`, error);
    }
  };


  useEffect(() => {
    getCurrentWeather();
  }, [city]);
  

  return (
    <div key={city.name} className="city">
    {cityWeather && (
        <div
        className='city-content'
        onClick={() => setLocation(cityWeather.name)}
      >

          <div className='city-left'>
    
        <img
            src={`http://openweathermap.org/img/wn/${cityWeather.weather[0].icon}@2x.png`}
            className="icon"
            alt="weather"
        />
      <div className='city-name'>
       <h1> {cityWeather.name}</h1>
       <p>10:23</p>
       </div>        
    </div>
    <div className='city-temp'>
        <h1>{cityWeather.main.temp.toFixed()} °C</h1>
        </div>
        </div> 
    )}  
    </div>
  );
};

export default CityWeather;
