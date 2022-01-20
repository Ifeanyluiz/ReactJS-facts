import React from "react";
import reactLogo from "../images/react-logo.png";
function Navbar() {
  return (
    <nav className="nav-items">
      <img src={reactLogo} alt="logo" className="nav-logo" />
      <h3 className="nav-logo-text">ReactFacts</h3>
      <h4 className="nav-title">React Course - Project 1</h4>
    </nav>
  );
}

export default Navbar;
