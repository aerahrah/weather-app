import { kevToCelcius, convertTimestamp } from "../utils/utils";
import { FaTemperatureHalf, FaDroplet, FaWind } from "react-icons/fa6";
import { ImArrowUp, ImArrowDown } from "react-icons/im";
import { IoIosSpeedometer } from "react-icons/io";
import { MdLocationOn, MdCalendarToday } from "react-icons/md";
import TableRow from "./tableRow";
import ComponentAnim from "../utils/componentAnim";
const CurrentWeather = ({ currentWeatherData }) => {
  if (!currentWeatherData) {
    return null;
  }

  const {
    name,
    sys: { country },
    weather,
    main,
    wind,
    dt,
  } = currentWeatherData;

  return (
    <ComponentAnim className="bg-white shadow-md rounded-xl row-start-1 col-start-1 row-span-2">
      <div className="p-4 md:p-6 lg:p-8 xl:p-10 flex flex-col sm:grid sm:grid-cols-2 md:flex  md:flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-x-12 gap-y-6 text-base  lg:text-lg text-gray-500 ">
        <div className="col-span-2">
          <p className="font-semibold">Today's Weather</p>
        </div>
        <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 xl:gap-10">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <MdLocationOn />
              <h2 className="font-semibold">{`${name}, ${country}`}</h2>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <MdCalendarToday />
              <p className="text-sm">{convertTimestamp(dt)}</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col">
              <img
                src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                alt=""
                className="h-20 w-20"
              />
              <p className="whitespace-no-wrap w-full">
                {weather[0].description}
              </p>
            </div>
            <h1 className="text-7xl text-gray-600">
              {kevToCelcius(main.temp)}°
            </h1>
          </div>
        </div>
        <div className="flex sm:flex-col md:flex-row lg:flex-col gap-4 md:gap-6 lg:gap-8 capitalize">
          <div className="flex flex-col gap-2 lg:gap-4">
            <div className="flex items-center gap-1 lg:gap-2">
              <FaTemperatureHalf className="text-xl" />
              <p className="text-gray-600">
                feels like {kevToCelcius(main.feels_like)}°
              </p>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-2 lg:gap-4">
              <div className="flex items-center gap-1 lg:gap-2">
                <ImArrowUp className="text-xl" />
                <p className="text-sky-600">
                  max {kevToCelcius(main.temp_max)}°
                </p>
              </div>
              <div className="flex items-center gap-1 lg:gap-2">
                <ImArrowDown className="text-xl" />
                <p className="text-sky-600">
                  min {kevToCelcius(main.temp_min)}°
                </p>
              </div>
            </div>
          </div>
          <table>
            <tbody className="flex flex-col gap-2">
              <TableRow
                icon={<FaDroplet className="text-xl" />}
                label="humidity"
                value={`${main.humidity}%`}
              />
              <TableRow
                icon={<FaWind className="text-xl" />}
                label="wind"
                value={`${wind.speed} kph`}
              />
              <TableRow
                icon={<IoIosSpeedometer className="text-xl" />}
                label="pressure"
                value={`${main.pressure} hPa`}
              />
            </tbody>
          </table>
        </div>
      </div>
    </ComponentAnim>
  );
};

export default CurrentWeather;
