import React from 'react';
import './views.css';
import SearchBar from '../components/search/SearchBar';
import Weather from '../components/weather/Weather';
import Condition from '../components/weather/Condition';
import Hourly from '../components/hourly/Hourly';
import Forecast from '../components/forecast/Forecast';

const Home = ({ 
  hourly, 
  data, 
  forecast, 
  location,
  setLocation, 
  search,
  changeTempType,
  changeTempTypeMin,
  changeTempTypeMax,
  selectedSpeed,
  selectedPressure,
  selectedPrecip,
  selectedDistance,
  }) => {

  const changeSpeedType = () => {
    if(selectedSpeed === "m/s") {
      return (data.current.wind_kph / 3.6).toFixed() + " m/s"
    }
    else if(selectedSpeed === "km/h") {
      return data.current.wind_kph.toFixed()+ " km/h"
    }
    else if(selectedSpeed === "knots") {
      return  (data.current.wind_kph * 0.53996).toFixed() + " knots"
    }

  }
  const changePressureType = () => {
    if(selectedPressure === "hPa") {
      return data.current.pressure_mb + " hPa"
    }
   else if(selectedPressure === "Inches") {
      return data.current.pressure_in + " inches"
    }
    else if(selectedPressure === "kPa") {
      return data.current.pressure_mb / 10 + " kPA"
    }
    else if(selectedPressure === "mm") {
      return data.current.pressure_in * 25.4 + " mm"
    }
    
  }

  const changePrecipType = () => {
    if(selectedPrecip === 'Milimeters'){
      return data.current.precip_mm + " mm";
    }
    else if(selectedPrecip === ' Inches') {
      return data.current.precip_in + " inches";
    }

    
  }

  const changeDistanceType = () => {
    if(selectedDistance === 'Kilometers') {
      return data.current.vis_km + " km";
    }
    else if(selectedDistance === 'Miles') {
      return data.current.vis_miles + " miles";
    }
    
  }




  return (
    <>
    <div className="center">
      <div className="searchbar">
        <SearchBar location={location} setLocation={setLocation} search={search} />
      </div>
      <div className="weather-section">
        <Weather data={data}  
        changeTempType={changeTempType}        
         />
      </div>
      <div className="hourly-section">
        <Hourly hourly={hourly}
         changeTempType={changeTempType} />
      </div>
      <div className="condition-section">
        <Condition 
        data={data}
        changeSpeedType={changeSpeedType}
        changePrecipType={changePrecipType}
        changePressureType={changePressureType}
        changeDistanceType={changeDistanceType}
         />
      </div>
      </div>
      <div className="right">
        <Forecast data={forecast}
        changeTempTypeMax={changeTempTypeMax}
        changeTempTypeMin={changeTempTypeMin}/>
      </div>
  
    </>
  );
};

export default Home;
