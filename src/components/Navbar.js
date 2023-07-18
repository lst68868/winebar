import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import Switch from './Switch'
import { ThemeContext } from '../context/ThemeContext'
import logoDarkMode from '../assets/Logo Dark Mode.png'
import logo from '../assets/Winebar-Logo.png'

function Navbar() {
  const { theme } = useContext(ThemeContext)
  return (
    <div className="flex justify-between items-center px-4 py-2">
      <Link to="/">
        <img className='logo'
          src={
            theme == 'dark'
              ? logoDarkMode
              : logo
          }
        />
      </Link>
      <Switch />
    </div>
  )
}

export default Navbar
