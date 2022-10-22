import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <section className="top-nav">
      <div>My Housework APP</div>
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button"></div>
      </label>
      <ul className="menu">
        {/* public */}
        <li>
          <NavLink to="/">Homepage</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>Signup</li>
        {/* private */}
        <li>
          <NavLink to="/myhousework">My Houserwork</NavLink>
        </li>
        <li>
          <NavLink to="/mytools">My Tools</NavLink>
        </li>
        <li>Logout</li>
      </ul>
    </section>
  );
}

export default Navbar;
