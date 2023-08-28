import { aqiCheck } from "./utils";
import { FaWind } from "react-icons/fa6";
const AirQualityIndex = ({ airQualityData }) => {
  if (!airQualityData) {
    return null;
  }
  const {
    components: { no2, so2, o3, pm2_5 },
    main: { aqi },
  } = airQualityData;
  return (
    <div className="row-start-2 col-start-2 xl:row-start-3 xl:col-start-1">
      <div className="bg-white p-4 md:p-6 lg:p-8 xl:p-10  rounded-xl shadow-md text-md lg:text-lg text-gray-500 capitalize">
        <div className="flex justify-between">
          <h1 className="font-semibold">air quality index</h1>
          {aqiCheck(aqi)}
        </div>
        <ul className="flex justify-between items-center mt-4">
          <FaWind className=" text-2xl lg:text-3xl" />
          <UlComponents label={"PM2.5"} value={pm2_5} />
          <UlComponents label={"SO2"} value={so2} />
          <UlComponents label={"NO2"} value={no2} />
          <UlComponents label={"O3"} value={o3} />
        </ul>
      </div>
    </div>
  );
};

const UlComponents = ({ label, value }) => {
  return (
    <li className="flex flex-col items-center lg:p-4">
      <label>{label}</label>
      <p className="text-sky-500 lg:text-xl">{value}</p>
    </li>
  );
};
export default AirQualityIndex;
