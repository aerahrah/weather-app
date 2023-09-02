import HourlyWeatherCard from "./hourlyWeatherCard";
import { motion } from "framer-motion";
import { convertTxtToDayName } from "../utils/utils";

const DaysContainer = ({
  isDayAvailable,
  idx,
  dayName,
  dayNameRefs,
  forecastWeatherData,
  dayWidths,
}) => {
  return (
    isDayAvailable && (
      <div
        ref={dayNameRefs.current[idx]}
        className="w-full flex flex-col gap-4 mt-6 overflow-x-hidden border-b-[1px] cursor-grab text-xs"
      >
        <h1 className=" font-semibold text-[1rem]">{dayName}</h1>
        <motion.div
          className="flex pb-4 pt-2 gap-4 md:gap-6"
          initial="hidden"
          drag="x"
          dragConstraints={{ left: -dayWidths[idx], right: 0 }}
          dragElastic={0.5}
        >
          {forecastWeatherData
            .filter(
              (dayData) => dayName === convertTxtToDayName(dayData.dt_txt)
            )
            .map((filteredData, idx) => (
              <HourlyWeatherCard key={idx} filteredData={filteredData} />
            ))}
        </motion.div>
      </div>
    )
  );
};
export default DaysContainer;
