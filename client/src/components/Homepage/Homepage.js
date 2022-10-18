import React, { useEffect, useState } from "react";
import "./Homepage.css";

function Homepage() {
  // lat and long inital using birmingham's location
  const [lat, setLat] = useState(52.4862);
  const [long, setLong] = useState(-1.8904);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);

        console.log("Latitude is:", lat);
        console.log("Longitude is:", long);
      });

      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log(result);
        });
    };
    fetchData();
  }, [lat, long]);

  return (
    <>
      <div className="welcome-msg">WELCOME MESSAGE</div>
      <div className="homepage-weather">
        {/* render the weather information of user's current location*/}
        <div className="render-weather">
          {typeof data != "undefined" ? (
            <div>
              <div className="location-div">
                <div className="location">
                  {data.name}, {data.sys.country}
                </div>
                <div className="date">{new Date().toDateString()}</div>
              </div>
              <div className="weather-div">
                <div className="temp">
                  {/* format temp from Kelvin to Celsius  */}
                  Temperature: {Math.round(data.main.temp - 273.15)}°C
                </div>
                <div className="weather-icon">
                  <img
                    src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                    alt="weather icon"
                  />
                </div>
                <div className="description:">
                  Description: {data.weather[0].description}
                </div>
                <div className="humidity">Humidity: {data.main.humidity} %</div>
                <div className="wind-speed">
                  Wind Speed: {data.wind.speed} m/s
                </div>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </>
  );
}

export default Homepage;
