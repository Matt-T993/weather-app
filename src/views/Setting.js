import React from 'react';
import SearchBar from '../components/search/SearchBar';

const Setting = ({
  selectedTemp,
  selectedPrecip,
  selectedDistance,
  selectedSpeed,
  selectedPressure,
  setSelectedTemp,
  setSelectedPrecip,
  setSelectedDistance,
  setSelectedSpeed,
  setSelectedPressure,
}) => {
  const handleTempChange = (temp) => {
    setSelectedTemp(temp === selectedTemp ? null : temp);
  };

  const handleSpeedChange = (speed) => {
    setSelectedSpeed(speed === selectedSpeed ? null : speed);
  };

  const handlePressureChange = (pressure) => {
    setSelectedPressure(pressure === selectedPressure ? null : pressure);
  };

  const handlePrecipChange = (precip) => {
    setSelectedPrecip(precip === selectedPrecip ? null : precip);
  };

  const handleDistanceChange = (distance) => {
    setSelectedDistance(distance === selectedDistance ? null : distance);
  };

  return (
    <>
      <div className='setting-center'>
        <SearchBar />
        <p className='title'>Settings</p>
        <div className='settings-wrapper'>
          <div className='settings'>
            <p className='sub-title'>Temperature</p>
            <div className='setting'>
              <p
                className={`temp-selection ${selectedTemp === 'Celcius' ? 'selected' : ''}`}
                onClick={() => handleTempChange('Celcius')}
              >
                Celcius
              </p>
              <p
                className={`temp-selection ${selectedTemp === 'Fahrenheit' ? 'selected' : ''}`}
                onClick={() => handleTempChange('Fahrenheit')}
              >
                Fahrenheit
              </p>
            </div>
            <p className='sub-title'>Wind Speed</p>
            <div className='setting'>
            <p
                className={`wind-selection ${selectedSpeed === 'm/s' ? 'selected' : ''}`}
                onClick={() => handleSpeedChange('m/s')}
              >
                m/s
              </p>
              <p
                className={`wind-selection ${selectedSpeed === 'km/h' ? 'selected' : ''}`}
                onClick={() => handleSpeedChange('km/h')}
              >
                km/h
              </p>
          
              <p
                className={`wind-selection ${selectedSpeed === 'knots' ? 'selected' : ''}`}
                onClick={() => handleSpeedChange('knots')}
              >
                Knots
              </p>
            </div>
            <p className='sub-title'>Pressure</p>
            <div className='setting'>
              <p
                className={`pressure-selection ${selectedPressure === 'hPa' ? 'selected' : ''}`}
                onClick={() => handlePressureChange('hPa')}
              >
                hPa
              </p>
              <p
                className={`pressure-selection ${selectedPressure === 'Inches' ? 'selected' : ''}`}
                onClick={() => handlePressureChange('Inches')}
              >
                Inches
              </p>
              <p
                className={`pressure-selection ${selectedPressure === 'kPa' ? 'selected' : ''}`}
                onClick={() => handlePressureChange('kPa')}
              >
                kPa
              </p>
              <p
                className={`pressure-selection ${selectedPressure === 'mm' ? 'selected' : ''}`}
                onClick={() => handlePressureChange('mm')}
              >
                mm
              </p>
            </div>
            <p className='sub-title'>Precipitation</p>
            <div className='setting'>
              <p
                className={`temp-selection ${selectedPrecip === 'Milimeters' ? 'selected' : ''}`}
                onClick={() => handlePrecipChange('Milimeters')}
              >
                Milimeters
              </p>
              <p
                className={`temp-selection ${selectedPrecip === 'Inches' ? 'selected' : ''}`}
                onClick={() => handlePrecipChange('Inches')}
              >
                Inches
              </p>
            </div>
            <p className='sub-title'>Distance</p>
            <div className='setting'>
              <p
                className={`temp-selection ${selectedDistance === 'Kilometers' ? 'selected' : ''}`}
                onClick={() => handleDistanceChange('Kilometers')}
              >
                Kilometers
              </p>
              <p
                className={`temp-selection ${selectedDistance === 'Miles' ? 'selected' : ''}`}
                onClick={() => handleDistanceChange('Miles')}
              >
                Miles
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Setting;
