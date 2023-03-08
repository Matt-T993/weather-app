import React from "react";

import CurrentLocation from "../components/CurrentLocation";

const Home = ({ data, setData, forecast, setForecast }) => {
  return (
    <div>
      <CurrentLocation
        data={data}
        setData={setData}
        forecast={forecast}
        setForecast={setForecast}
      />
    </div>
  );
};

export default Home;
