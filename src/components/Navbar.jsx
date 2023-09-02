import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <NavLink to="/">
          <img src="/kasa-logo.png" alt="Logo" />
        </NavLink>
      </div>
      <NavLink to="/">
        <div>Acceuil</div>
      </NavLink>
      <NavLink to="/about">
        <div>A Propos</div>
      </NavLink>
    </nav>
  );
}

export default Navbar;
