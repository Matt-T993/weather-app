import React from 'react';
import './views.css';
import SearchBar from '../components/search/SearchBar';
import Weather from '../components/weather/Weather';
import Condition from '../components/weather/Condition';
import Hourly from '../components/hourly/Hourly';
import Forecast from '../components/forecast/Forecast';

const Home = ({ hourly, data, forecast, location, setLocation, search }) => {
  return (
    <>
    <div className="center">
      <div className="searchbar">
        <SearchBar location={location} setLocation={setLocation} search={search} />
      </div>
      <div className="weather-section">
        <Weather data={data} />
      </div>
      <div className="hourly-section">
        <Hourly hourly={hourly} />
      </div>
      <div className="condition-section">
        <Condition data={data} />
      </div>
      </div>
      <div className="right">
        <Forecast data={forecast} />
      </div>
  
    </>
  );
};

export default Home;
