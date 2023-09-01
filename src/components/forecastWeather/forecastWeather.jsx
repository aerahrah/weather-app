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
      <div className=" text-gray-500 capitalize text-base lg:text-lg">
        <h1 className="font-semibold mb-4 pt-4 md:pt-6 lg:pt-8 xl:pt-10 px-4 md:px-6 lg:px-8 xl:px-10">
          5 days forecast
        </h1>
        <div className="hidden sm:block xl:hidden overflow-y-auto h-[364px] sm:mb-4 md:mb-6 sm:px-4 md:px-6 lg:px-8">
          {filteredData.length > 0 &&
            filteredData.map((data, idx) => (
              <DayForecastItem data={data} isMobile={"desktop"} key={idx} />
            ))}
        </div>
        <div className="block sm:hidden xl:block overflow-y-auto h-[284px] xl:h-[364px] mb-4 xl:mb-8 px-4 xl:px-10">
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
