import SearchCityName from "./searchCity";

const Header = ({ handleOnSearchChange }) => {
  return (
    <header className="w-full absolute top-0 p-6 bg-white shadow-md ">
      <div className="flex items-center gap-8 w-[80vw] mx-auto ">
        <h1 className="text-xl md:text-2xl  lg:text-4xl md:mr-6 font-bold text-center text-sky-600 tracking-tight">
          Weatherly
        </h1>
        <SearchCityName handleOnSearchChange={handleOnSearchChange} />
      </div>
    </header>
  );
};

export default Header;
