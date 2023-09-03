import { aqiCheck } from "../utils/utils";
import { FaWind, FaInfo, FaXmark } from "react-icons/fa6";
import AqiInfoCard from "./aqiInfoCard";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ComponentAnim from "../utils/componentAnim";
const AirQualityIndex = ({ airQualityData }) => {
  const [isInfoCardOpen, setIsInfoCardOpen] = useState(false);

  const {
    components: { no2, so2, o3, pm2_5 },
    main: { aqi },
  } = airQualityData;
  const aqiInfo = aqiCheck(aqi);

  return (
    <ComponentAnim className="bg-white relative shadow-md rounded-xl row-start-2 col-start-2 xl:row-start-3 xl:col-start-1">
      <div className="flex flex-col justify-around p-4 md:p-6 lg:p-8 xl:p-10 capitalize text-gray-500 text-md lg:text-lg h-44 md:h-full">
        <div className="flex justify-between">
          <h1 className="font-semibold">air quality index</h1>

          <button
            style={{ backgroundColor: `${aqiInfo.color}` }}
            onClick={() => setIsInfoCardOpen(true)}
            className={`flex items-center h-full py-1 px-3 capitalize rounded-full   font-semibold transition duration-100 hover:shadow transform  hover:scale-[1.02] focus:scale-[1.02] active:scale-[0.94]`}
          >
            <p>{aqiInfo.label}</p>
            <i className="mb-[3px]">
              <FaInfo />
            </i>
          </button>
        </div>
        <ul className="flex justify-between items-center mt-4">
          <FaWind className=" text-2xl lg:text-3xl" />
          <UlComponents label={"PM2.5"} value={pm2_5} />
          <UlComponents label={"SO2"} value={so2} />
          <UlComponents label={"NO2"} value={no2} />
          <UlComponents label={"O3"} value={o3} />
        </ul>
        <AnimatePresence>
          {isInfoCardOpen && (
            <AqiInfoCard
              setIsInfoCardOpen={setIsInfoCardOpen}
              isInfoCardOpen={isInfoCardOpen}
              motion={motion}
              FaXmark={FaXmark}
            />
          )}
        </AnimatePresence>
      </div>
    </ComponentAnim>
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
