import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./views/Home";
import Cities from "./views/Cities";
import Setting from "./views/Setting";

function App() {
  const [data, setData] = useState({});
  const [forecast, setForecast] = useState({});
  const [hourly, setHourly] = useState({});
  const [location, setLocation] = useState("sydney");
  const[selectedTemp, setSelectedTemp] = useState('Celcius')
  const[selectedSpeed, setSelectedSpeed] = useState('m/s')
  const[selectedPressure, setSelectedPressure] = useState('hPa')
  const[selectedPrecip, setSelectedPrecip] = useState('Milimeters')
  const[selectedDistance, setSelectedDistance] = useState('Kilometers')



  // forecast and weather URL
  const currentWeatherUrl = `${process.env.REACT_APP_WEATHER_BASE}?key=${process.env.REACT_APP_WEATHER_KEY}&q=${location}&aqi=yes`
  // const currentWeatherUrl2 = `${process.env.REACT_APP_BASE}weather?q=${location}&units=metric&appid=${process.env.REACT_APP_KEY}`;
  const forcastWeatherUrl = `${process.env.REACT_APP_BASE}forecast?q=${location}&units=metric&appid=${process.env.REACT_APP_KEY}`;
  const hourlyWeatherUrl = `${process.env.REACT_APP_WEATHER_BASE}?key=${process.env.REACT_APP_WEATHER_KEY}&q=${location}&days=1&aqi=yes&alerts=no`
 
  const getCurrentWeather = async () => {
    try {
      const response = await axios.get(currentWeatherUrl);
      setData(response.data)
    } catch (error) {
      
      console.error('Error fetching current weather:', error);
    }
  };




  const getForecastWeather = async () => {
    try {
      const response = await axios.get(forcastWeatherUrl);
      setForecast(response.data)
   
    } catch (error) {
      console.error('Error fetching forecast weather:', error);
    }
  };
  const getHourlyWeather = async () => {
    try{
      const response = await axios.get(hourlyWeatherUrl);
      setHourly(response.data)
    } catch (error) {
      console.error('Error fetching forecast weather:', error);
    }
  }





  useEffect(() => {
    getCurrentWeather();
    getForecastWeather();
    getHourlyWeather();
   
   
  }, [location]); 

  const changeTempType = () => {
    if (selectedTemp === 'Celcius') {
      return data.current.temp_c.toFixed() + "°C";
    } else if (selectedTemp === 'Fahrenheit') {
      return data.current.temp_f.toFixed() + "°F";
    }
  };
  
  const changeTempTypeMax = (value) => {

    if (selectedTemp === 'Celcius') {
      return value.toFixed();
    } else if (selectedTemp === 'Fahrenheit') {
      return ((value * 9/5) + 32).toFixed();
    }
  };
  
  const changeTempTypeMin = (value) => {
    if (selectedTemp === 'Celcius') {

      return value.toFixed();

    } else if (selectedTemp === 'Fahrenheit') {
      return ((value * 9/5) + 32).toFixed();
    }
  };
  



  return (
    <div className="app">
   
    <Router>
    <div className="app-left">
      <Sidebar/>
      </div>
      <Routes>
        <Route exact path="/" element={<Home 
        location={location} 
        setLocation={setLocation}
        hourly={hourly} 
        data={data} 
        forecast={forecast} 
        changeTempType={changeTempType}
        changeTempTypeMax={changeTempTypeMax}
        changeTempTypeMin={changeTempTypeMin}
        selectedDistance={selectedDistance}
        selectedPrecip={selectedPrecip}
        selectedPressure={selectedPressure}
        selectedSpeed={selectedSpeed}
      

         />} />
        <Route exact path="/cities" element={<Cities location={location} 
        hourly={hourly} 
        data={data} 
        forecast={forecast} 
        setLocation={setLocation}
        changeTempType={changeTempType}
        changeTempTypeMax={changeTempTypeMax}
        changeTempTypeMin={changeTempTypeMin}
        />} />
        <Route exact path="/setting" element={<Setting
        selectedTemp={selectedTemp}
        selectedPrecip={selectedPrecip}
        selectedDistance={selectedDistance}
        selectedSpeed={selectedSpeed}
        selectedPressure={selectedPressure}
        setSelectedDistance={setSelectedDistance}
        setSelectedPrecip={setSelectedPrecip}
        setSelectedPressure={setSelectedPressure}
        setSelectedSpeed={setSelectedSpeed}
        setSelectedTemp={setSelectedTemp}
          />} />
      </Routes>
    </Router>
    </div>
   

    


      

   
  );
}

export default App;
