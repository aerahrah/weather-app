import React, { useEffect, useState } from "react";
import {
  getCityMeridian,
  getCurrentWeatherForecast,
  getWeatherForecast,
} from "./api/weather_api";
import { convertTimestamp } from "./convertTimestamp";
import Header from "./header/header";
import Footer from "./footer";
const WeatherApp = () => {
  const [weatherForecast, setWeatherForecast] = useState(null);
  const [meridian, setMeridian] = useState(null);

  return (
    <div className="flex flex-col bg-gray-100 justify-center items-center min-h-[100vh]">
      <Header />

      <div className="bg-white p-6 rounded-lg shadow-md "></div>
      <Footer />
    </div>
  );
};

export default WeatherApp;
