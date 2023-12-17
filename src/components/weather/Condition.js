import React from "react";
import "./weather.css";
import { WiHumidity, WiStrongWind } from "react-icons/wi";
import { BsFillCloudsFill, BsSunset } from "react-icons/bs";

const Condition = ({ data }) => {
  return (
    
    <div
      className={typeof data.main != "undefined" ? "condition-wrapper" : null}
    >
     <p>Conditions</p>
        <div className="content-list">
          {data.main ? (
            <div className="content">
            
              <p>
                <WiHumidity className="cIcon" />
              </p>
              <div className="text">
              <p>Humidity</p>
            
              <p className="desc">{data.main.humidity}%</p>
              </div>
            </div>
          ) : null}

          {data.wind ? (
            <div className="content">
          
              <p>
                <WiStrongWind className="cIcon" />
              </p>
              <div className="text">
              <p>Wind</p>
             
              <p className="desc">{data.wind.speed.toFixed()}m/s</p>
              </div>
            </div>
          ) : null}

          {data.clouds ? (
            <div className="content">
            
              <p>
                <BsFillCloudsFill className="cIcon" />
              </p>
              <div className="text">
              <p>Clouds</p>
           
              <p className="desc">{data.clouds.all}%</p>
              </div>
            </div>
          ) : null}

          {data.main ? (
            <div className="content">
                
              <p>
                <BsSunset className="cIcon" />
              </p>
              <div className="text">
              <p>Pressure</p>
           
              <p className="desc">{data.main.pressure}</p>
              </div>
            </div>
          ) : null}
        </div>
      </div>

  );
};

export default Condition;
