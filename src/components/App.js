import "../styles/App.css";
import { Routes, Route } from "react-router-dom";
import React, { useContext } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LandingPage from "../pages/LandingPage";
import { ThemeContext } from "../context/ThemeContext";
function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className={`App ${theme}`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <Footer />
      </div>
    </>
  );
}
export default App;
