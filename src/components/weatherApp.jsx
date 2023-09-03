import React, { useEffect, useState } from "react";
import {
  getCurrentWeatherForecast,
  getWeatherForecast,
  getAirQualityIndex,
} from "./api/weather_api";
import CurrentWeather from "./currentWeather/currentWeather";
import AirQualityIndex from "./aqiWeather/airQualityIndex";
import ForecastWeather from "./forecastWeather/forecastWeather";
import CurrentTime from "./currentWeather/currentTime";
import ExtendedWeatherForecast from "./extendedWeatherForecast/extendedWeatherForecast";
import Header from "./header/header";
import Footer from "./footer";
import Spinner from "./utils/spinner";
import ErrorNotification from "./utils/errorNotification";
import { motion, AnimatePresence } from "framer-motion";

const WeatherApp = () => {
  const [weatherForecast, setWeatherForecast] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [airQualityData, setAirQualityData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showComponent, setShowComponent] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.split(" ");
    setShowComponent(false);
    setIsLoading(true);
    Promise.all([
      getCurrentWeatherForecast(lat, lon),
      getWeatherForecast(lat, lon),
      getAirQualityIndex(lat, lon),
    ])
      .then(([currentWeatherForecast, weatherForecast, airQualityData]) => {
        setCurrentWeather(currentWeatherForecast);
        setWeatherForecast(weatherForecast.list);
        setAirQualityData(airQualityData.list[0]);
        setShowComponent(true);
        setIsLoading(false);
        setErrorMsg("");
      })
      .catch((error) => {
        setIsLoading(false);
        setErrorMsg(error.message);
      });
  };

  return (
    <div className="relative bg-blue-100 min-h-[100vh] pb-16 ">
      <Header handleOnSearchChange={handleOnSearchChange} />
      {isLoading ? (
        <Spinner />
      ) : (
        showComponent && (
          <div className="flex flex-col w-[90vw] lg:w-[85vw] xl:w-[80vw] pt-36 gap-4 mx-auto md:grid  md:grid-cols-2 md:gap-6">
            <CurrentWeather currentWeatherData={currentWeather} />
            <CurrentTime currentTimeData={currentWeather} />
            <ForecastWeather forecastWeatherData={weatherForecast} />
            <AirQualityIndex airQualityData={airQualityData} />
            <ExtendedWeatherForecast forecastWeatherData={weatherForecast} />
          </div>
        )
      )}
      <Footer />
      {errorMsg && (
        <ErrorNotification
          errorMsg={errorMsg}
          onClose={() => setErrorMsg("")}
        />
      )}
    </div>
  );
};

export default WeatherApp;
