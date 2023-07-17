import React, { useContext } from 'react'
import '../styles/switch.css'
import { ThemeContext } from '../context/ThemeContext'

function Switch() {
  const {theme, toggleTheme } = useContext(ThemeContext)
  return (
    <label className="switch">
    <input type="checkbox" onClick={toggleTheme} />
    <span className="slider round"></span>
  </label>
  )
}

export default Switch