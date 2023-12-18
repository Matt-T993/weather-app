// Sidebar.js

import React from 'react';
import { TiWeatherCloudy } from 'react-icons/ti';
import { TfiMenuAlt, TfiSettings } from 'react-icons/tfi';
import { GiUmbrella } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import './sidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to='/' className='sidebar-logo'>
        <GiUmbrella className='sidebar-icon' />
      </Link>
      <Link to='/' className='sidebar-content'>
        <TiWeatherCloudy className='sidebar-icon' />
        <p className='label'>Weather</p>
      </Link>
      <Link to='/cities' className='sidebar-content'>
        <TfiMenuAlt className='sidebar-icon' />
        <p className='label'>Cities</p>
      </Link>
      <Link to='/setting' className='sidebar-content'>
        <TfiSettings className='sidebar-icon' />
        <p className='label'>Settings</p>
      </Link>
    </div>
  );
};

export default Sidebar;
