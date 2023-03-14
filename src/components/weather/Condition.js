import React from "react";
import "./weather.css";
import { WiHumidity, WiStrongWind } from "react-icons/wi";
import { BsFillCloudsFill, BsSunset } from "react-icons/bs";

const Condition = ({ data }) => {
  return (
    <div
      className={typeof data.main != "undefined" ? "condition-wrapper" : null}
    >
      <div className="bottom">
        <div className="content-list">
          {data.main ? (
            <div className="content">
              <label>
                <WiHumidity className="cIcon" />
              </label>
              <label>Humidity</label>
              <label>{data.main.humidity}%</label>
            </div>
          ) : null}

          {data.wind ? (
            <div className="content">
              <label>
                <WiStrongWind className="cIcon" />
              </label>
              <label>Wind</label>
              <label>{data.wind.speed.toFixed()}m/s</label>
            </div>
          ) : null}

          {data.clouds ? (
            <div className="content">
              <label>
                <BsFillCloudsFill className="cIcon" />
              </label>
              <label>Clouds</label>
              <label>{data.clouds.all}%</label>
            </div>
          ) : null}

          {data.main ? (
            <div className="content">
              <label>
                <BsSunset className="cIcon" />
              </label>
              <label>Pressure: {data.main.pressure}</label>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Condition;
