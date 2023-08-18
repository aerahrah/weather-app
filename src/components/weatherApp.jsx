import React, { useEffect, useState } from "react";
import { getCityMeridian, getWeatherForecast } from "./api/weather_api";
import { convertTimestamp } from "./convertTimestamp";
import Header from "./header/header";
import Footer from "./footer";
const WeatherApp = () => {
  const [cityName, setCityName] = useState("");
  const [weatherForecast, setWeatherForecast] = useState({
    weather: [],
    main: [],
    sys: [],
    cityName: "",
    dayName: "",
  });
  const [meridian, setMeridian] = useState({
    lat: "",
    lon: "",
  });

  const handleSubmitInputCity = () => {
    getCityMeridian(cityName)
      .then((data) => {
        console.log(data[0]);
        setMeridian({
          lat: data[0].lat,
          lon: data[0].lon,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    if (meridian.lat && meridian.lon) {
      getWeatherForecast(meridian.lat, meridian.lon)
        .then((data) => {
          console.log(data);
          console.log(data.sys.country);
          setWeatherForecast((prevForecast) => ({
            ...prevForecast,
            weather: [data.weather[0]],
            sys: [data.sys],
            main: [data.main],
            cityName: data.name,
            dayName: convertTimestamp(data.dt),
          }));
          console.log(weatherForecast.main[0].temp);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [meridian]);

  return (
    <div className="flex flex-col bg-gray-100 justify-center items-center min-h-[100vh]">
      <Header
        cityName={cityName}
        setCityName={setCityName}
        handleSubmitInputCity={handleSubmitInputCity}
      />

      <div className="bg-white p-6 rounded-lg shadow-md ">
        <div>
          {weatherForecast.weather.length > 0 && (
            <ul>
              <li>Description: {weatherForecast.weather[0].description}</li>
              <li>Icon: {weatherForecast.weather[0].icon}</li>
              <li>Main: {weatherForecast.weather[0].main}</li>
              <li>Day Name: {weatherForecast.sys[0].country}</li>
              <div>
                <img
                  src={`https://openweathermap.org/img/wn/${weatherForecast.weather[0].icon}@2x.png`}
                  alt=""
                />
              </div>
            </ul>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WeatherApp;
