import React, { useState } from 'react';
import './App.css';

const SearchBar = ({ data, onDataSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      onDataSearch(data);
    } else {
      const filteredData = data.filter(
        (item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.features.some((feature) =>
            feature.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
      onDataSearch(filteredData);
    }
  };

  const handleReset = () => {
    setSearchTerm('');
    onDataSearch(data);
  };

  return (
    <div className="search-bar">
      <input
        className="search-input"
        type="text"
        placeholder="Search for products or addons"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
      <button className="reset-button" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default SearchBar;
