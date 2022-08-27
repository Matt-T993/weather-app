import React from "react";
import Moment from "moment";

const SearchBar = ({ location, search, setLocation }) => {
  const formatDate = Moment().format("MMMM Do YYYY");
  return (
    <>
      <div className="top">
        <p>{formatDate}</p>
        <input
          className="search-bar"
          placeholder="Enter Location"
          type="text"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={search}
        />
      </div>
      <hr />
    </>
  );
};

export default SearchBar;
