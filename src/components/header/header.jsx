import SearchCityName from "./searchCity";
import GetCurrentLocation from "./getCurrentLocation";

const Header = ({ handleOnSearchChange }) => {
  return (
    <header className="w-full absolute top-0 p-2 md:p-6 bg-white shadow-md ">
      <div className="flex flex-col md:flex-row items-center md:gap-6 w-[90vw] md:w-[80vw] mx-auto ">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-center text-sky-600 tracking-tight">
            Weatherly
          </h1>
        </div>
        <div className="flex gap-2 md:gap-4 w-full items-center justify-center">
          <SearchCityName handleOnSearchChange={handleOnSearchChange} />
          <GetCurrentLocation handleOnSearchChange={handleOnSearchChange} />
        </div>
      </div>
    </header>
  );
};

export default Header;
