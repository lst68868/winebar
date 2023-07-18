import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import Switch from './Switch';
import { ThemeContext } from '../context/ThemeContext';
import logoDarkMode from '../assets/Logo Dark Mode.png';
import logo from '../assets/Winebar-Logo.png';

function Navbar() {
  const { theme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img
            src={theme === 'dark' ? logoDarkMode : logo}
            alt="Logo"
          />
        </Link>
      </div>
      <Switch />
    </nav>
  );
}

export default Navbar;
