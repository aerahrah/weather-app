import { filterData } from "../utils";
import DayForecastItem from "./daysForecastItem";
const ForecastWeather = ({ forecastWeatherData }) => {
  if (!forecastWeatherData) {
    return null;
  }
  const filteredData = filterData(forecastWeatherData);
  console.log(filteredData);
  return (
    <div className="bg-white rounded-xl shadow-md row-start-3 col-start-1 col-span-2 xl:row-span-2 xl:col-span-1 xl:row-start-2 xl:col-start-2">
      <div className=" p-4 md:p-6 lg:p-8 xl:p-10 text-gray-500 capitalize text-md lg:text-lg">
        <h1 className="font-semibold mb-4">5 days forecast</h1>
        <div className="hidden sm:block lg:hidden">
          {filteredData.length > 0 &&
            filteredData.map((data, idx) => (
              <DayForecastItem data={data} isMobile={"desktop"} key={idx} />
            ))}
        </div>
        <div className="block sm:hidden lg:block">
          {filteredData.length > 0 &&
            filteredData.map((data, idx) => (
              <DayForecastItem data={data} isMobile={"mobile"} key={idx} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ForecastWeather;
