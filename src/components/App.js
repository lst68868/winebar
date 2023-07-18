import { Routes, Route } from "react-router-dom";
import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import LandingPage from "../pages/LandingPage";
import Switch from "../components/Switch";
import { ThemeContext } from "../context/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Navbar />
      <Switch />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <div className={`App ${theme}`}></div>
    </>
  );
}

export default App;
