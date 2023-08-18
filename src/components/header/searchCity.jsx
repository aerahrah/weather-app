const SearchCityName = ({ cityName, setCityName, handleSubmitInputCity }) => {
  return (
    <div className=" rounded-md ">
      <input
        className="outline-0 min-w-[34vw] p-2 rounded-l-md"
        type="text"
        value={cityName}
        placeholder="Enter city name..."
        onChange={(e) => setCityName(e.target.value)}
      />
      <button
        className="bg-orange-500 text-gray-100 p-2 px-4 rounded-r-md"
        onClick={handleSubmitInputCity}
      >
        Submit
      </button>
    </div>
  );
};

export default SearchCityName;
