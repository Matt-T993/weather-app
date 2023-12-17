// Cities.js
import './views.css';
import SearchBar from '../components/search/SearchBar';
import CityWeather from '../components/citiesComponents/CityWeather'; // Import the new component
import CityContent from '../components/citiesComponents/CityContent';


const Cities = ({ hourly, data, forecast, location, setLocation  }) => {
  const citiesData = [
    { name: "New York", country: "USA" },
    { name: "London", country: "UK" },
    { name: "Tokyo", country: "Japan"},
    { name: "Sydney", country: "Australia"},
  ];


  return (
    <>
      <div className="city-center">
        <div className="searchbar">
          <SearchBar location={location} setLocation={setLocation}  />
        </div>
        <div className='cities'>
          {citiesData.map((city) => (
            <CityWeather key={city.name} city={city} setLocation={setLocation} />
          ))}
        </div>
      </div>
      <div className='right'>
          <CityContent  hourly={hourly} data={data} forecast={forecast}/>
      </div>
     
    </>
  );
};

export default Cities;
