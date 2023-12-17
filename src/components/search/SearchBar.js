import React, { useState } from "react";
import "./searchbar.css";

const SearchBar = ({ setLocation }) => {
  const [inputValue, setInputValue] = useState("");

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setLocation(inputValue); 
    }
  };

  return (
    <>
      <div className="searchbar-wrapper">
        <div className="search">
          <input
            className="search-bar"
            placeholder="Search for cities"
            type="text"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            onKeyPress={handleKeyPress}
          />
        </div>
      </div>
    </>
  );
};

export default SearchBar;
