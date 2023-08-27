import HourlyWeatherCard from "./hourlyWeatherCard";
import { motion } from "framer-motion";
import { convertTimestampDayName } from "../utils";

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
        className="w-full flex flex-col gap-4 text-xs mt-6 overflow-x-hidden border-b-[1px] cursor-grab"
      >
        <h1 className="text-[1rem] font-semibold">{dayName}</h1>
        <motion.div
          className="flex gap-6 pb-4 pt-2 px-2"
          initial="hidden"
          drag="x"
          dragConstraints={{ left: -dayWidths[idx], right: 0 }}
          dragElastic={0.5}
        >
          {forecastWeatherData
            .filter(
              (dayData) => dayName === convertTimestampDayName(dayData.dt_txt)
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
