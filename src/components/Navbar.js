import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Logo Here</div> 
      <div className="titlecard">Grape Escape</div>
      <button className="toggle-button"></button>
    </nav>
  );
};

export default Navbar;
