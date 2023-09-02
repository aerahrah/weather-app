import { useRef, useState, useEffect } from "react";
import { convertTxtToDayName } from "../utils/utils";
import DaysContainer from "./daysContainer";

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

  const firstDay = convertTxtToDayName(forecastWeatherData[0].dt_txt);
  const firstDayIndex = daysOfWeek.indexOf(firstDay);
  const rearrangedDaysOfWeek = [
    ...daysOfWeek.slice(firstDayIndex),
    ...daysOfWeek.slice(0, firstDayIndex),
  ];
  const [dayWidths, setDayWidths] = useState(
    Array(rearrangedDaysOfWeek.length).fill(0)
  );

  const dayNameRefs = useRef(
    Array(rearrangedDaysOfWeek.length)
      .fill(null)
      .map(() => useRef(null))
  );

  const updateDayWidths = () => {
    setDayWidths((widths) =>
      widths.map((_, idx) => {
        const ref = dayNameRefs.current[idx];
        if (ref && ref.current) {
          return ref.current.scrollWidth - ref.current.offsetWidth;
        }
        return 0;
      })
    );
  };

  useEffect(() => {
    updateDayWidths();
  }, []);

  return (
    <div className="col-span-2">
      <div className="w-full bg-white rounded-xl shadow-md p-4 md:p-6 lg:p-8 xl:p-10 capitalize  text-gray-500 text-base lg:text-lg">
        <h1 className="font-semibold mb-4">Extended Forecast</h1>
        {rearrangedDaysOfWeek.map((dayName, idx) => {
          const isDayAvailable = forecastWeatherData.some(
            (dayData) => dayName === convertTxtToDayName(dayData.dt_txt)
          );
          return (
            <DaysContainer
              key={idx}
              idx={idx}
              isDayAvailable={isDayAvailable}
              dayName={dayName}
              dayNameRefs={dayNameRefs}
              forecastWeatherData={forecastWeatherData}
              dayWidths={dayWidths}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ExtendedWeatherForecast;
