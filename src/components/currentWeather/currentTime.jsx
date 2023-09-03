import { convertTimestampHours, convertTimezone } from "../utils/utils";
import { BsFillSunriseFill, BsFillSunsetFill } from "react-icons/bs";
import ComponentAnim from "../utils/componentAnim";
const CurrentTime = ({ currentTimeData }) => {
  if (!currentTimeData) {
    return null;
  }

  const {
    dt,
    sys: { sunrise, sunset, country },
    timezone,
    name,
  } = currentTimeData;
  console.log(currentTimeData);
  return (
    <ComponentAnim
      className="bg-white rounded-xl shadow-md lg:row-start-1 lg:col-start-2"
    >
      <div className="p-4 md:p-6 lg:p-8 xl:p-10 flex flex-wrap justify-between items-between gap-2 md:gap-4 lg:gap-6 text-gray-500 text-base lg:text-lg">
        <div className="flex md:flex-col justify-between w-[80vw] gap-4 mx-auto sm:mx-0  sm:w-auto">
          <h1 className="font-bold text-gray-700 text-2xl md:text-4xl ">
            {convertTimestampHours(dt)}
          </h1>
          <div>
            <h1 className="font-semibold">Time in {`${name}, ${country}`}</h1>
            <p>UTC {convertTimezone(timezone)}</p>
          </div>
        </div>

        <div className="flex xl:flex-col justify-between w-full text-sm sm:text-base sm:w-auto  gap-2 lg:gap-4">
          <div className="flex items-center p-2 gap-1 rounded-full bg-yellow-300 sm:px-4 md:px-2">
            <BsFillSunriseFill className="text-lg lg:text-2xl" />
            <p className="sm:hidden md:block mr-1 md:mr-2">Sunrise</p>
            <p className="whitespace-no-wrap text-gray-600">
              {convertTimestampHours(sunrise)}
            </p>
          </div>
          <div className="flex items-center p-2 gap-1 rounded-full bg-orange-300 sm:px-4 md:px-2">
            <BsFillSunsetFill className="text-lg lg:text-2xl" />
            <p className="sm:hidden md:block mr-1 md:mr-2">Sunset</p>
            <p className="whitespace-no-wrap text-gray-600">
              {convertTimestampHours(sunset)}
            </p>
          </div>
        </div>
      </div>
    </ComponentAnim>
  );
};

export default CurrentTime;
