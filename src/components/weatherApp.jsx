import React, { useEffect, useState } from "react";
import {
  getCurrentWeatherForecast,
  getWeatherForecast,
} from "./api/weather_api";
import { convertTimestamp } from "./convertTimestamp";
import CurrentWeather from "./currentWeather";
import Header from "./header/header";
import Footer from "./footer";

const WeatherApp = () => {
  const [weatherForecast, setWeatherForecast] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.split(" ");
    Promise.all([
      getCurrentWeatherForecast(lat, lon),
      getWeatherForecast(lat, lon),
    ]).then(([currentWeatherForecast, weatherForecast]) => {
      setCurrentWeather(currentWeatherForecast);
      setWeatherForecast(weatherForecast);
    });
  };

  return (
    <div className="flex flex-col bg-gray-100 justify-center items-center min-h-[100vh]">
      <Header handleOnSearchChange={handleOnSearchChange} />
      <CurrentWeather currentWeatherData={currentWeather} />

      <Footer />
    </div>
  );
};

export default WeatherApp;
