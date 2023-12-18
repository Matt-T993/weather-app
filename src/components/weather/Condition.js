import React from "react";
import "./weather.css";
import { WiHumidity, WiStrongWind } from "react-icons/wi";
import { BsFillCloudsFill, BsSunset } from "react-icons/bs";

const Condition = ({
  data, 
  changeSpeedType,
  changePrecipType,
  changePressureType,
  changeDistanceType,
}) => {
  return (
    
    <div
      className={typeof data.current != "undefined" ? "condition-wrapper" : null}
    >
     <p>Conditions</p>
        <div className="content-list">
          {data.current ? (
            <div className="content">
            
              <p>
                <WiHumidity className="cIcon" />
              </p>
              <div className="text">
              <p>Precipitation</p>
            
              <p className="desc">{changePrecipType()}</p>
              </div>
            </div>
          ) : null}

          {data.current ? (
            <div className="content">
          
              <p>
                <WiStrongWind className="cIcon" />
              </p>
              <div className="text">
              <p>Wind</p>
             
              <p className="desc">{changeSpeedType()}</p>
              </div>
            </div>
          ) : null}

          {data.current ? (
            <div className="content">
            
              <p>
                <BsFillCloudsFill className="cIcon" />
              </p>
              <div className="text">
              <p>Clouds</p>
           
              <p className="desc">{data.current.cloud}%</p>
              </div>
            </div>
          ) : null}

          {data.current ? (
            <div className="content">
                
              <p>
                <BsSunset className="cIcon" />
              </p>
              <div className="text">
              <p>Pressure</p>
           
              <p className="desc">{changePressureType()}</p>
              </div>
            </div>
          ) : null}
        </div>
      </div>

  );
};

export default Condition;
