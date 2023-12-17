import React from 'react'
import SearchBar from '../components/search/SearchBar'

const Setting = () => {
  return (
    <>
    <div className='setting-center'>
      <SearchBar/>
      <p className='title'>Settings</p>
      <div className='settings-wrapper'>
        <div className='settings'>
        <p className='sub-title'>Temperture</p>
        <div className='setting'>
            <p className='temp-selection'>Celcius</p> 
            <p className='temp-selection'>Fahrenheit</p> 
          </div>
          <p className='sub-title'>Wind Speed</p>

        
        <div className='setting'>
          <p className='wind-selection'>km/h </p>
          <p className='wind-selection'>m/s </p>
          <p className='wind-selection'>Knots </p>
        </div>
        <p className='sub-title'>Pressure</p>
        <div className='setting'>
          <p className='pressure-selection'>hPA </p>
          <p className='pressure-selection'>inches </p>
          <p className='pressure-selection'>kPA </p>
          <p className='pressure-selection'>mm</p>
        </div>
        
        <p className='sub-title'>Precipitation</p>
        <div className='setting'>
            <p className='temp-selection'>Milimeters</p> 
            <p className='temp-selection'>inches</p> 
          </div>


          <p className='sub-title'>Distance</p>
        <div className='setting'>
            <p className='temp-selection'>Kilometers</p> 
            <p className='temp-selection'>Miles</p> 
          </div>
          </div>



        
      </div>

    
    </div>
    </>
  )
}

export default Setting