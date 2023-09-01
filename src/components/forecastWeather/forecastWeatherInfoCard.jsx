import { FaTemperatureHalf, FaDroplet, FaWind } from "react-icons/fa6";
import { ImArrowUp, ImArrowDown } from "react-icons/im";
import { IoIosSpeedometer } from "react-icons/io";

const ForecastWeatherInfoCard = ({
  data,
  kevToCelcius,
  motion,
  isWeatherInfoCardOpen,
}) => {
  return (
    <motion.table
      initial={{ y: -150 }}
      animate={{ y: isWeatherInfoCardOpen ? 0 : -150 }}
      exit={{ y: -150 }}
      transition={{ type: "spring", stiffness: 160, damping: 18 }}
      className="relative w-full bg-stone-200 mb-2 rounded-xl shadow-md z-0"
    >
      <tbody className="">
        <tr className="flex justify-between">
          <RowContent
            icon={<FaTemperatureHalf />}
            label={"Feels"}
            value={kevToCelcius(data.main.feels_like)}
            unit={"°"}
          />
          <RowContent
            icon={<ImArrowDown />}
            label={"min"}
            value={kevToCelcius(data.main.temp_min)}
            unit={"°"}
          />
          <RowContent
            icon={<ImArrowUp />}
            label={"max"}
            value={kevToCelcius(data.main.temp_max)}
            unit={"°"}
          />
        </tr>
        <tr className="flex justify-between">
          <RowContent
            icon={<FaDroplet />}
            label={"humidity"}
            value={data.main.humidity}
            unit={"%"}
          />
          <RowContent
            icon={<FaWind />}
            label={"wind"}
            value={data.wind.speed}
            unit={"Kph"}
          />
          <RowContent
            icon={<IoIosSpeedometer />}
            label={"pressure"}
            value={data.main.pressure}
            unit={"Hpa"}
          />
        </tr>
      </tbody>
    </motion.table>
  );
};
export const RowContent = ({ icon, label, value, unit }) => {
  return (
    <td className="p-4 w-[6rem] sm:w-[6.5rem] md:w-[8rem] text-sm sm:text-base">
      <label className="flex items-center gap-1">
        <p>{icon}</p>

        {label}
      </label>
      <p>
        {value} {unit}
      </p>
    </td>
  );
};
export default ForecastWeatherInfoCard;
