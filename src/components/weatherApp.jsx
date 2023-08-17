import React, { useEffect, useState } from "react";
import { getCityMeridian, getWeatherForecast } from "./api/weather_api";
import { convertTimestamp } from "./convertTimestamp";
import Footer from "./footer";
const WeatherApp = () => {
  const api_key = import.meta.env.VITE_API_KEY;
  const [cityName, setCityName] = useState("");
  const [weatherForecast, setWeatherForecast] = useState({
    weather: [],
    country: "",
    cityName: "",
    temp: "",
    humidity: "",
    min_temp: "",
    max_temp: "",
    dayName: "",
  });
  const [meridian, setMeridian] = useState({
    lat: "",
    lon: "",
  });

  const handleSubmitInputCity = () => {
    getCityMeridian(cityName, api_key)
      .then((data) => {
        console.log(data[0]);
        setMeridian({
          lat: data[0].lat,
          lon: data[0].lon,
          state: data[0].state,
          country: data[0].country,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    if (meridian.lat && meridian.lon) {
      getWeatherForecast(meridian.lat, meridian.lon, api_key)
        .then((data) => {
          console.log(data);
          const weatherData = data.weather[0];

          setWeatherForecast((prevForecast) => ({
            ...prevForecast,
            weather: [weatherData],
            dayName: convertTimestamp(data.dt),
          }));
          console.log(weatherData);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [meridian]);

  return (
    <div className="flex flex-col bg-gray-100 justify-center items-center min-h-[100vh]">
      <div className="bg-white p-6 rounded-lg shadow-md ">
        <div className="border-[1px] px-2 mb-4">
          <input
            className="outline-0 min-w-[15rem] "
            type="text"
            value={cityName}
            placeholder="Enter city name..."
            onChange={(e) => setCityName(e.target.value)}
          />
          <button
            className="border-l-[1px] p-2"
            onClick={handleSubmitInputCity}
          >
            submit
          </button>
        </div>
        <div>
          {meridian.lat && (
            <ul>
              <li>Latitude: {meridian.lat}</li>
              <li>Longitude: {meridian.lon}</li>
            </ul>
          )}
        </div>
        <div>
          {weatherForecast.weather.length > 0 && (
            <ul>
              <li>Description: {weatherForecast.weather[0].description}</li>
              <li>Icon: {weatherForecast.weather[0].icon}</li>
              <li>Main: {weatherForecast.weather[0].main}</li>
              <li>Day Name: {weatherForecast.dayName}</li>
            </ul>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WeatherApp;
