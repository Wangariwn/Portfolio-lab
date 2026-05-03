import React from 'react';

const Header = ({ searchQuery, setSearchQuery }) => {
  return (
    <header className="navbar">
      <h1>My Portfolio</h1>
      <input 
        type="text" 
        placeholder="Search projects..." 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </header>
  );
};

export default Header;