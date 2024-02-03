//Filter transactions based on descriptions

import React from 'react';

function Search({ onSearchChange }) {
  const handleSearchChange = (event) => {
    // Call the function passed as prop with the new search value
    onSearchChange(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by description..."
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default Search;

