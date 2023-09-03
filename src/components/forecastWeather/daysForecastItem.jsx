import { kevToCelcius } from "../utils/utils";
import { BiUpArrowAlt, BiDotsHorizontalRounded } from "react-icons/bi";
import { useState } from "react";
import ForecastWeatherInfoCard from "./forecastWeatherInfoCard";
import { motion, AnimatePresence } from "framer-motion";

const DayForecastItem = ({ data, timestamp }) => {
  const [isWeatherInfoCardOpen, setIsWeatherInfoCardOpen] = useState(false);
  return (
    <div className=" border-b-[1px]">
      <ul className="relative z-10 flex justify-between items-center bg-white py-1 text-sm sm:text-base">
        <li className="flex items-center">
          <img
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt=""
            className="h-12 w-12 sm:h-16 md:w-16"
          />
          <p>{kevToCelcius(data.main.temp)}°</p>
        </li>
        <li className="flex gap-1 md:gap-2">
          <p>{data.weather[0].description}</p>
          <p>{data.pop ? `${Math.round(data.pop * 100)}%` : ""}</p>
        </li>
        <li className="flex gap-1 md:gap-2 lg:gap-4 items-center">
          <p>{timestamp}</p>
          {!isWeatherInfoCardOpen ? (
            <BiDotsHorizontalRounded
              onClick={() => setIsWeatherInfoCardOpen(true)}
              className="h-6 w-6 text-gray-700 bg-gray-200 rounded-full transition transform cursor-pointer duration-100 hover:shadow-inner hover:scale-[1.04] hover:bg-gray-300"
            />
          ) : (
            <BiUpArrowAlt
              onClick={() => setIsWeatherInfoCardOpen(false)}
              className="h-6 w-6 text-gray-700 bg-gray-200 rounded-full transition transform cursor-pointer duration-100 hover:shadow-inner hover:scale-[1.04] hover:bg-gray-300"
            />
          )}
        </li>
      </ul>
      <AnimatePresence>
        {isWeatherInfoCardOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="overflow-hidden"
          >
            <ForecastWeatherInfoCard
              data={data}
              kevToCelcius={kevToCelcius}
              motion={motion}
              isWeatherInfoCardOpen={isWeatherInfoCardOpen}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DayForecastItem;
