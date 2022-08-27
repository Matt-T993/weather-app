import React from "react";

const Button = ({ data, setShow }) => {
  return (
    <>
      {data.main ? (
        <div className="button">
          <button className="btn" onClick={() => setShow(true)}>
            Today's Weather
          </button>
          <button className="btn" onClick={() => setShow(false)}>
            Daily Forecast
          </button>
        </div>
      ) : null}
    </>
  );
};

export default Button;
