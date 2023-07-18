import { Routes, Route } from "react-router-dom";
import React, { useContext } from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LandingPage from '../pages/LandingPage';
import Carousel from '../components/Carousel'
import Slideshow from '../components/Slideshow'
import Switch from '../components/Switch'
import { ThemeContext } from '../context/ThemeContext'
import { useContext } from 'react'

function App() {
  const {theme} = useContext(ThemeContext)
  return (
    <>
    <Navbar />
    <Routes>
    <Route path="/" element={<LandingPage />} />
    </Routes>
    <Footer />
    <div className={`App ${theme}`}>
      <Slideshow className="w-10 h-10"/>
      <Carousel />
      <Switch />
    </div>
    </>
  )
}

export default App
