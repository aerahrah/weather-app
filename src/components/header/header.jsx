import SearchCityName from "./searchCity";

const Header = ({ handleOnSearchChange }) => {
  return (
    <header className="w-full absolute top-0 p-6 bg-white shadow-md ">
      <div className="flex items-center gap-8 w-[80vw] mx-auto">
        <h1 className="text-4xl mr-6 font-bold text-center text-sky-600">
          Weather Forecast
        </h1>
        <SearchCityName handleOnSearchChange={handleOnSearchChange} />
      </div>
    </header>
  );
};

export default Header;
