import React from "react";
import "./Homepage.css";
// import { useState, useEffect } from "react";

function Homepage() {
  return (
    <>
      <div className="welcome-msg">WELCOME MESSAGE</div>
      <div className="homepage-weather">
        {/* search for current weather in user's city */}
        <div className="search-area">
          <div className="search-bar">
            <input type="text" placeholder="Enter your city" />
            <button>Search</button>
          </div>
        </div>
        {/* render the weather information */}
        <div className="render-weather">Here to render weather info</div>
      </div>
    </>
  );
}

export default Homepage;
