import "./App.css";
import Home from "./pages/Home";
import { useState } from "react";

import Location from "./pages/Location";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [data, setData] = useState({});
  const [forecast, setForecast] = useState({});
  return (
    // <div
    //   className={
    //     typeof data.main != "undefined"
    //       ? data.main.temp > 16
    //         ? "app warm"
    //         : "app cold"
    //       : "app"
    //   }
    // >
    <div className="app">
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                data={data}
                setData={setData}
                forecast={forecast}
                setForecast={setForecast}
              />
            }
          />
          <Route
            path="/location"
            element={
              <Location
                data={data}
                setData={setData}
                forecast={forecast}
                setForecast={setForecast}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
