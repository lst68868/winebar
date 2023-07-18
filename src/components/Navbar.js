import React from "react";
import { Link} from 'react-router-dom';
import '../styles/Navbar.css';
import Switch from "./Switch";


function Navbar() {
  return (
    <div className="flex justify-between items-center px-4 py-2">
  <Link to="/"><img src="assets/grape-escape-logo.png"/></Link>
  <Switch />
  </div>
  );
}

export default Navbar;
