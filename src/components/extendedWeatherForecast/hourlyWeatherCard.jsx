import { convertTimestampHours, kevToCelcius } from "../utils";
const HourlyWeatherCard = ({ filteredData }) => {
  return (
    <ul className="flex flex-col items-center justify-center bg-white p-2 min-w-[9rem] rounded-xl border-[1px] transform hover:scale-[1.08]  transition duratin-100 hover:shadow hover:text-gray-200 hover:bg-black hover:font-semibold">
      <li className="flex items-center">
        <img
          src={`https://openweathermap.org/img/wn/${filteredData.weather[0].icon}@2x.png`}
          alt=""
          className="h-12 w-12"
        />
        <p className="text-md">{kevToCelcius(filteredData.main.temp)}°</p>
      </li>
      <li className="flex gap-1 items-center">
        <p>{filteredData.weather[0].description}</p>
        <p>
          {filteredData.pop ? `${Math.round(filteredData.pop * 100)}%` : ""}
        </p>
      </li>
      <li className="mt-1">{convertTimestampHours(filteredData.dt_txt)}</li>
    </ul>
  );
};
export default HourlyWeatherCard;
