import React, { useEffect, useState } from "react";
import {
  getCurrentWeatherForecast,
  getWeatherForecast,
  getAirQualityIndex,
} from "./api/weather_api";
import CurrentWeather from "./currentWeather";
import AirQualityIndex from "./airQualityIndex";
import Header from "./header/header";
import Footer from "./footer";

const WeatherApp = () => {
  const [weatherForecast, setWeatherForecast] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [airQualityData, setAirQualityData] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.split(" ");
    Promise.all([
      getCurrentWeatherForecast(lat, lon),
      getWeatherForecast(lat, lon),
      getAirQualityIndex(lat, lon),
    ]).then(([currentWeatherForecast, weatherForecast, airQualityData]) => {
      setCurrentWeather(currentWeatherForecast);
      setWeatherForecast(weatherForecast);
      setAirQualityData(airQualityData.list[0]);
      console.log(airQualityData.list[0]);
    });
  };

  return (
    <div className="relative bg-blue-50 items-center min-h-[100vh] pb-16">
      <Header handleOnSearchChange={handleOnSearchChange} />
      <div className="md:grid md:grid-cols-2 gap-8 w-[80vw] mx-auto pt-36">
        <CurrentWeather currentWeatherData={currentWeather} />
        <div className="w-[30vw] row-span-2">haha</div>
        <AirQualityIndex airQualityData={airQualityData} />
      </div>
      <Footer />
    </div>
  );
};

export default WeatherApp;
