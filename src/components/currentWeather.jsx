import { kevToCelcius } from "./kevToCelcius";
import { ImArrowUp, ImArrowDown, ImDroplet } from "react-icons/im";
import { FaWind } from "react-icons/fa";
import { IoIosSpeedometer } from "react-icons/io";

const CurrentWeather = ({ currentWeatherData }) => {
  return (
    currentWeatherData && (
      <div className="w-[40vw] bg-white p-10 rounded-xl shadow-md grid grid-cols-2 gap-x-10 gap-y-8 text-lg text-gray-500">
        <p className="text-gray-500 font-semibold col-span-2 text-xl">
          Current Weather
        </p>
        <div className="flex flex-col gap-10">
          <h2 className="font-semibold">{`${currentWeatherData.name}, ${currentWeatherData.sys.country}`}</h2>
          <div>
            <span className="flex">
              <img
                src={`https://openweathermap.org/img/wn/${currentWeatherData.weather[0].icon}@2x.png`}
                alt=""
              />
              <h1 className="text-7xl text-gray-600">
                {kevToCelcius(currentWeatherData.main.temp)}°
              </h1>
            </span>
            <p className="mt-4">{currentWeatherData.weather[0].description}</p>
          </div>
        </div>
        <div className="flex flex-col gap-8 capitalize">
          <div className="flex flex-col gap-4">
            <p className="text-gray-600">
              feels like {kevToCelcius(currentWeatherData.main.feels_like)}°
            </p>
            <div className="flex gap-4">
              <span className="flex items-center gap-2">
                <ImArrowUp className="text-sm" />
                <p className="text-sky-600">
                  {kevToCelcius(currentWeatherData.main.temp_max)}°
                </p>
              </span>
              <span className="flex items-center gap-2">
                <ImArrowDown className="text-sm" />
                <p className="text-sky-600">
                  {kevToCelcius(currentWeatherData.main.temp_min)}°
                </p>
              </span>
            </div>
          </div>
          <table>
            <tbody className="flex flex-col gap-2">
              <tr>
                <td className="pr-2 text-sm">
                  <ImDroplet />
                </td>
                <td className="w-24">humidity</td>
                <td className="text-sky-600">
                  {currentWeatherData.main.humidity}%
                </td>
              </tr>
              <tr>
                <td className="pr-2 text-sm">
                  <FaWind />
                </td>
                <td className="w-24">wind </td>
                <td className="text-sky-600">
                  <p>{currentWeatherData.wind.speed}kph</p>
                </td>
              </tr>
              <tr>
                <td className="pr-2 text-sm">
                  <IoIosSpeedometer />
                </td>
                <td className="w-24">pressure</td>
                <td className="text-sky-600">
                  <p>{currentWeatherData.main.pressure}hPa</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  );
};

export default CurrentWeather;
