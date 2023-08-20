const CurrentWeather = ({ currentWeatherData }) => {
  return (
    currentWeatherData && (
      <div className="bg-white p-6 rounded-lg shadow-md ">
        <p>{currentWeatherData.weather[0].description}</p>
        <p>{`city name: ${currentWeatherData.name}, ${currentWeatherData.sys.country}`}</p>
        <p>temp max: {currentWeatherData.main.temp}</p>
        <p>{currentWeatherData.main.temp_min}</p>
        <p>{currentWeatherData.main.temp_max}</p>
        <p>{currentWeatherData.main.pressure}</p>
        <p>{currentWeatherData.main.humidity}</p>
        <p>{currentWeatherData.main.feels_like}</p>
        <p>{currentWeatherData.wind.speed}</p>
      </div>
    )
  );
};

export default CurrentWeather;
