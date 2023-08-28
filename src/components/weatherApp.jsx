import React, { useEffect, useState } from "react";
import {
  getCurrentWeatherForecast,
  getWeatherForecast,
  getAirQualityIndex,
} from "./api/weather_api";
import CurrentWeather from "./currentWeather/currentWeather";
import AirQualityIndex from "./airQualityIndex";
import ForecastWeather from "./forecastWeather/forecastWeather";
import CurrentTime from "./currentWeather/currentTime";
import ExtendedWeatherForecast from "./extendedWeatherForecast/extendedWeatherForecast";
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
      setWeatherForecast(weatherForecast.list);
      setAirQualityData(airQualityData.list[0]);
      console.log(weatherForecast);
    });
  };

  return (
    <div className="relative bg-blue-100 items-center min-h-[100vh] pb-16">
      <Header handleOnSearchChange={handleOnSearchChange} />
      <div className="md:grid flex flex-col gap-4 md:grid-cols-2  md:gap-6 w-[90vw] lg:w-[85vw] xl:w-[80vw] mx-auto pt-36">
        <CurrentWeather currentWeatherData={currentWeather} />
        <CurrentTime currentTimeData={currentWeather} />
        <ForecastWeather forecastWeatherData={weatherForecast} />
        <AirQualityIndex airQualityData={airQualityData} />
        <ExtendedWeatherForecast forecastWeatherData={weatherForecast} />
      </div>
      <Footer />
    </div>
  );
};

export default WeatherApp;
