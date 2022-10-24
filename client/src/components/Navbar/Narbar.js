import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

import Auth from "../../utils/auth";

function Navbar() {
  return (
    <section className="top-nav">
      <div>My Housework APP</div>
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button"></div>
      </label>
      <ul className="menu">
        {/* public navbar */}
        <li>
          <NavLink to="/">Homepage</NavLink>
        </li>
        {/* private navbar */}
        {Auth.loggedIn() ? (
          <>
            <li>
              <NavLink to="/myhousework">My Housework</NavLink>
            </li>
            <li>
              <NavLink to="/mytools">My Tools</NavLink>
            </li>
            <li>
              <NavLink to="/" onClick={() => Auth.logout()}>
                Logout
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/signup">Signup</NavLink>
            </li>
          </>
        )}
      </ul>
    </section>
  );
}

export default Navbar;
