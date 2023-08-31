import { FaLocationDot } from "react-icons/fa6";

const GetCurrentLocation = ({ handleOnSearchChange }) => {
  const getCurrentPosition = () => {
    const success = (pos) => {
      const currentPosition = [pos.coords.latitude, pos.coords.longitude].join(
        " "
      );
      handleOnSearchChange(currentPosition);
    };
    const error = (err) => {
      console.log(err);
    };
    return navigator.geolocation.getCurrentPosition(success, error);
  };

  return (
    <div className="">
      <button
        className="flex items-center gap-2 bg-sky-600 text-sky-50 px-4 py-3 md:py-2 rounded-full  tranformation transition duration-100 hover:shadow hover:scale-[1.02] focus:scale-[1.02] active:scale-[0.94]"
        onClick={getCurrentPosition}
      >
        <FaLocationDot />
        <p className="whitespace-nowrap hidden md:block">Current location</p>
      </button>
    </div>
  );
};
export default GetCurrentLocation;
