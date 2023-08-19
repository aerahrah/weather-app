import SearchCityName from "./searchCity";

const Header = () => {
  return (
    <header className="absolute top-0 p-6  bg-gray-800 w-full flex items-center gap-8">
      <h1 className="text-3xl font-bold text-center text-orange-500">
        Weather Forecast
      </h1>
      <SearchCityName />
    </header>
  );
};

export default Header;
