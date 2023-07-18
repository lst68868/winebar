import { Routes, Route } from "react-router-dom";
import React, { useContext } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LandingPage from "../pages/LandingPage";
import Carousel from "./Carousel";
import Slideshow from "./Slideshow";
import Switch from "./Switch";
import { ThemeContext } from "../context/ThemeContext";
function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <Footer />
      <div className={`App ${theme}`}>
        <Slideshow className="w-10 h-10" />
        <Carousel />
        <Switch />
      </div>
    </>
  );
}
export default App;
