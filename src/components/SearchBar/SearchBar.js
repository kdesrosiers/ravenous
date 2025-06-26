// SearchBar.js
import React from 'react';

const SearchBar = () => {
  return (
    <div>
      <input placeholder="Search Businesses" />
      <input placeholder="Where?" />
      <div>
        <button>Best Match</button>
        <button>Highest Rated</button>
        <button>Most Reviewed</button>
      </div>
      <button>Search</button>
    </div>
  );
};

export default SearchBar;
