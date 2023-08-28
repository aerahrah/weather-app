import { convertTimestamp, kevToCelcius } from "../utils";
const DayForecastItem = ({ data, isMobile }) => {
  return (
    <ul className="flex justify-between items-center py-1 border-b-[1px] text-sm sm:text-lg">
      <li className="flex items-center">
        <img
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt=""
          className="h-16 w-16"
        />
        <p>{kevToCelcius(data.main.temp)}°</p>
      </li>
      <li className="flex gap-2">
        <p>{data.weather[0].description}</p>
        <p>{data.pop ? `${Math.round(data.pop * 100)}%` : ""}</p>
      </li>
      {isMobile === "mobile" ? (
        <li>{convertTimestamp(data.dt, true)}</li>
      ) : (
        <li>{convertTimestamp(data.dt, false)}</li>
      )}
    </ul>
  );
};

export default DayForecastItem;
