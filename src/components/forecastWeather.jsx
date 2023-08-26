import React from "react";
import { filterData, convertTimestamp, kevToCelcius } from "./utils";
const ForecastWeather = ({ forecastWeatherData }) => {
  if (!forecastWeatherData) {
    return null;
  }
  const filteredData = filterData(forecastWeatherData);
  console.log(filteredData);
  return (
    <div className="row-span-2 ">
      <div className=" bg-white p-10 rounded-xl shadow-md text-gray-500 capitalize ">
        <h1 className="text-lg font-semibold mb-4">5 days forecast</h1>
        {filteredData.length > 0 &&
          filteredData.map((data, index) => (
            <ul
              className="flex justify-between items-center py-2 border-b-[1px]"
              key={index}
            >
              <li className="flex items-center">
                <img
                  src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                  alt=""
                  className="h-20 w-20"
                />
                <p>{kevToCelcius(data.main.temp)}°</p>
              </li>
              <li className="flex gap-2">
                <p>{data.weather[0].description}</p>
                <p>{data.pop ? `${Math.round(data.pop * 100)}%` : ""}</p>
              </li>
              <li>{convertTimestamp(data.dt)}</li>
            </ul>
          ))}
      </div>
    </div>
  );
};

export default ForecastWeather;
