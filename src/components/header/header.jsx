import SearchCityName from "./searchCity";
import GetCurrentLocation from "./getCurrentLocation";

const Header = ({ handleOnSearchChange }) => {
  return (
    <header className="absolute w-full bg-white shadow-md top-0 p-2 md:p-6 ">
      <div className="flex flex-col items-center mx-auto md:flex-row md:gap-6 w-[90vw] md:w-[80vw]">
        <div>
          <h1 className="text-center text-sky-600 tracking-tight font-bold text-3xl md:text-4xl">
            Weatherly
          </h1>
        </div>
        <div className="flex items-center justify-center w-full gap-2 md:gap-4">
          <SearchCityName handleOnSearchChange={handleOnSearchChange} />
          <GetCurrentLocation handleOnSearchChange={handleOnSearchChange} />
        </div>
      </div>
    </header>
  );
};

export default Header;
