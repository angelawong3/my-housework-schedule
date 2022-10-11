import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <section class="top-nav">
      <div>My Housework APP</div>
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-button-container" for="menu-toggle">
        <div className="menu-button"></div>
      </label>
      <ul className="menu">
        {/* public */}
        <li>Homepage</li>
        <li>Login</li>
        <li>Signup</li>
        {/* private */}
        <li>My Houserwork</li>
        <li>My Tools</li>
        <li>Logout</li>
      </ul>
    </section>
  );
}

export default Navbar;
