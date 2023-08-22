import { kevToCelcius, convertTimestamp } from "./utils";
import { FaTemperatureEmpty, FaDroplet, FaWind } from "react-icons/fa6";
import { ImArrowUp, ImArrowDown } from "react-icons/im";
import { MdLocationOn, MdCalendarToday } from "react-icons/md";
import { IoIosSpeedometer } from "react-icons/io";

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
    <div className="bg-white p-10 rounded-xl shadow-md grid grid-cols-2 gap-x-12 gap-y-8 text-lg text-gray-500 ">
      <div className="col-span-2">
        <p className="text-gray-500 font-semibold text-lg">Current Weather</p>
        <div className="flex items-center gap-2">
          <MdCalendarToday />
          <p className="text-sm">{convertTimestamp(dt)}</p>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex items-center gap-2">
          <MdLocationOn />
          <h2 className="font-semibold">{`${name}, ${country}`}</h2>
        </div>

        <div className="flex gap-4 items-center">
          <img
            src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
            alt=""
          />
          <h1 className="text-7xl text-gray-600">{kevToCelcius(main.temp)}°</h1>
        </div>
        <p className="whitespace-no-wrap w-full">{weather[0].description}</p>
      </div>
      <div className="flex flex-col gap-8 capitalize">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <FaTemperatureEmpty className="text-xl" />
            <p className="text-gray-600">
              feels like {kevToCelcius(main.feels_like)}°
            </p>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <ImArrowUp className="text-xl" />
              <p className="text-sky-600">max {kevToCelcius(main.temp_max)}°</p>
            </div>
            <div className="flex items-center gap-2">
              <ImArrowDown className="text-xl" />
              <p className="text-sky-600">min {kevToCelcius(main.temp_min)}°</p>
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
  );
};

const TableRow = ({ icon, label, value }) => (
  <tr>
    <td className="pr-2 text-sm">{icon}</td>
    <td className="w-24">{label}</td>
    <td className="text-sky-600">{value}</td>
  </tr>
);

export default CurrentWeather;
