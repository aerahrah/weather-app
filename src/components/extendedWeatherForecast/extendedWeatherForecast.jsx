import { useRef, useState, useEffect } from "react";
import { convertTimestampDayName } from "../utils";
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

  const firstDay = convertTimestampDayName(forecastWeatherData[0].dt_txt);
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
      <div className="bg-white p-10 rounded-xl text-gray-500 capitalize shadow-md">
        <h1 className="text-lg font-semibold mb-4">Extended Forecast</h1>
        {rearrangedDaysOfWeek.map((dayName, idx) => {
          const isDayAvailable = forecastWeatherData.some(
            (dayData) => dayName === convertTimestampDayName(dayData.dt_txt)
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
