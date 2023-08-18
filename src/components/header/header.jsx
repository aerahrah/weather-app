import SearchCityName from "./searchCity";

const Header = ({ cityName, setCityName, handleSubmitInputCity }) => {
  return (
    <header className="absolute top-0 fixed  p-6  bg-gray-800 w-full flex gap-8">
      <h1 className="text-3xl font-bold text-center text-orange-500">
        Weather Forecast
      </h1>
      <SearchCityName
        cityName={cityName}
        setCityName={setCityName}
        handleSubmitInputCity={handleSubmitInputCity}
      />
    </header>
  );
};

export default Header;
