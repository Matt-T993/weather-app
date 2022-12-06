import "./App.css";
import { useState } from "react";
import Home from "./pages/Home";

import Location from "./pages/Location";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [data, setData] = useState({});
  const [forecast, setForecast] = useState({});

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={<Location />}
            data={data}
            setData={setData}
            forecast={forecast}
            setForecast={setForecast}
          />
          <Route path="location" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
