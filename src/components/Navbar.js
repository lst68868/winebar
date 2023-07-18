import React from 'react';
import '../styles/Navbar.css';
import logo from '../../src/assets/logo.png'
const Navbar = () => {
  return (
    <nav className="navbar">
       <img src={logo} alt="Logo" />
      <button className="toggle-button"></button>
    </nav>
  );
};

export default Navbar;
