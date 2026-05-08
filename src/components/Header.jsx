import React from 'react';

const Header = ({ searchQuery, setSearchQuery }) => {
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Search is already handled by onChange, this allows form submission
  };

  return (
    <header className="navbar">
      <h1>My Portfolio</h1>
      <form onSubmit={handleSearchSubmit} className="search-form">
        <input 
          type="text" 
          placeholder="Search projects..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-btn">Search</button>
      </form>
    </header>
  );
};

export default Header;