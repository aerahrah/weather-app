import React from "react";
import { convertTimestampHours, kevToCelcius } from "./utils";

const ExtendedWeatherForecast = ({ forecastWeatherData }) => {
  if (!forecastWeatherData) {
    return null;
  }
  console.log(forecastWeatherData);
  return (
    <div className="col-span-2 ">
      <div className="bg-white p-8 rounded-xl text-gray-500 capitalize  shadow-md">
        <h1 className="text-lg font-semibold mb-4">Extended Forecast</h1>
        <div className="flex flex-wrap gap-6 justify-between text-xs">
          {forecastWeatherData.map((data, index) => (
            <ul
              className="flex flex-col items-center justify-center bg-white p-2 w-[7.5rem] rounded-xl border-[1px]"
              key={index}
            >
              <li className="flex items-center">
                <img
                  src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                  alt=""
                  className="h-12 w-12"
                />
                <p className="text-md">{kevToCelcius(data.main.temp)}°</p>
              </li>
              <li>{data.weather[0].description}</li>
              <li>{convertTimestampHours(data.dt)}</li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ExtendedWeatherForecast;
