import { Routes, Route } from "react-router-dom";
import React, { useContext } from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LandingPage from '../pages/LandingPage';
import '../styles/App.css';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
    <Route path="/" element={<LandingPage />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
