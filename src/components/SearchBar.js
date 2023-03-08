import React from "react";
import Moment from "moment";
import { BiSearch, BiCurrentLocation } from "react-icons/bi";
import { RiCelsiusFill, RiFahrenheitFill } from "react-icons/ri";
const SearchBar = ({ location, search, setLocation }) => {
  // const formatDate = Moment().format("MMMM Do YYYY");
  return (
    <>
      <div className="searchbar-wrapper">
        <div className="search">
          <input
            className="search-bar"
            placeholder="Enter Location"
            type="text"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            onKeyPress={search}
          />
          <BiSearch className="icons" />
          <BiCurrentLocation className="icons" />
        </div>
        <div className="icon-temp">
          <p className="apple">
            {<RiCelsiusFill />} | {<RiFahrenheitFill />}
          </p>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
