import React from "react";
import {
  convertTimestampHours,
  convertTimestampDayName,
  kevToCelcius,
} from "./utils";

const ExtendedWeatherForecast = ({ forecastWeatherData }) => {
  if (!forecastWeatherData) {
    return null;
  }
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const firstDay = convertTimestampDayName(forecastWeatherData[0].dt_txt);
  const firstDayIndex = daysOfWeek.indexOf(firstDay);
  const rearragedDaysOfWeek = [
    ...daysOfWeek.slice(firstDayIndex),
    ...daysOfWeek.slice(0, firstDayIndex),
  ];
  console.log(forecastWeatherData);

  return (
    <div className="col-span-2 ">
      <div className="bg-white p-10 rounded-xl text-gray-500 capitalize  shadow-md">
        <h1 className="text-lg font-semibold mb-4">Extended Forecast</h1>

        {rearragedDaysOfWeek.map((data, idx) => {
          const isThereDayName = forecastWeatherData.some(
            (dayName) => data == convertTimestampDayName(dayName.dt_txt)
          );
          if (isThereDayName) {
            return (
              <div
                className="flex flex-col gap-4 border-b-[1px] py-5 text-xs"
                key={idx}
              >
                <h1 className="text-[1rem] font-semibold">{data}</h1>
                <div className="flex gap-6 flex-wrap">
                  {forecastWeatherData
                    .filter(
                      (dayData) =>
                        data === convertTimestampDayName(dayData.dt_txt)
                    )
                    .map((filteredData, index) => (
                      <ul
                        className="flex flex-col items-center justify-center bg-white p-2 w-[9rem] rounded-xl border-[1px] transform hover:scale-[1.08]  transition duratin-100 hover:shadow hover:text-gray-200 hover:bg-black hover:font-semibold"
                        key={index}
                      >
                        <li className="flex items-center justify-around">
                          <img
                            src={`https://openweathermap.org/img/wn/${filteredData.weather[0].icon}@2x.png`}
                            alt=""
                            className="h-12 w-12"
                          />
                          <p className="text-md">
                            {kevToCelcius(filteredData.main.temp)}°
                          </p>
                        </li>
                        <li className="flex gap-1 items-center">
                          <p>{filteredData.weather[0].description}</p>
                          <p>
                            {filteredData.pop
                              ? `${Math.round(filteredData.pop * 100)}%`
                              : ""}
                          </p>
                        </li>
                        <li className="mt-1">
                          {convertTimestampHours(filteredData.dt_txt)}
                        </li>
                      </ul>
                    ))}
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};
export default ExtendedWeatherForecast;
