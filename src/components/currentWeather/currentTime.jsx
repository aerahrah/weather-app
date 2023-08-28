import { convertTimestampHours, convertTimezone } from "../utils";
import { BsFillSunriseFill, BsFillSunsetFill } from "react-icons/bs";
import TableRow from "./tableRow";
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
    <div className="lg:row-start-1 lg:col-start-2 ">
      <div className="p-4  md:p-6 lg:p-8 xl:p-10 flex flex-wrap justify-between items-between bg-white  rounded-xl shadow-md text-gray-500 text-md lg:text-lg gap-2 md:gap-4 lg:gap-6 ">
        <div className="flex md:flex-col gap-4 justify-between w-[80vw]  sm:w-auto mx-auto sm:mx-0">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-700">
            {convertTimestampHours(dt)}
          </h1>
          <div>
            <h1 className="font-semibold">Time in {`${name}, ${country}`}</h1>
            <p>UTC {convertTimezone(timezone)}</p>
          </div>
        </div>

        <div className="flex xl:flex-col justify-between w-full text-sm sm:text-md sm:w-auto justify-between gap-2 lg:gap-4">
          <div className="flex items-center gap-1 bg-yellow-300 rounded-full p-2 sm:px-4 md:px-2">
            <BsFillSunriseFill className="text-lg lg:text-2xl" />
            <p className="sm:hidden md:block mr-1 md:mr-2">Sunrise</p>
            <p className="whitespace-no-wrap text-gray-600">
              {convertTimestampHours(sunrise)}
            </p>
          </div>
          <div className="flex items-center gap-1 bg-orange-300 rounded-full  p-2 sm:px-4 md:px-2">
            <BsFillSunsetFill className="text-lg lg:text-2xl" />
            <p className="sm:hidden md:block mr-1 md:mr-2">Sunset</p>
            <p className="whitespace-no-wrap text-gray-600">
              {convertTimestampHours(sunset)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentTime;
