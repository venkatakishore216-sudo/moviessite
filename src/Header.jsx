import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">

      <div className="logo">
        <h2>CINEMA <span>PALACE</span></h2>
      </div>

      <div className="search-box">
        <input placeholder="Search movies..." />
      </div>

      <div className="nav-buttons">
        <button>Home</button>
        <button>Songs</button>
        <button>Trailers</button>
      </div>

    </header>
  );
};

export default Header;