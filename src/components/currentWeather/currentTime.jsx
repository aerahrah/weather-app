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
      <div className="flex justify-between items-between bg-white p-10 rounded-xl shadow-md text-gray-500 text-lg ">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold text-gray-700">
            {convertTimestampHours(dt)}
          </h1>
          <div>
            <h1 className="font-semibold">Time in {`${name}, ${country}`}</h1>
            <p>UTC {convertTimezone(timezone)}</p>
          </div>
        </div>
        <table>
          <tbody className="flex flex-col gap-2 text-xl">
            <TableRow
              icon={<BsFillSunriseFill className="text-2xl" />}
              label="Sunrise"
              value={convertTimestampHours(sunrise)}
              color="gray"
            />
            <TableRow
              icon={<BsFillSunsetFill className="text-2xl" />}
              label="Sunset"
              value={convertTimestampHours(sunset)}
              color="gray"
            />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CurrentTime;
