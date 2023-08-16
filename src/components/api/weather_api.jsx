import Axios from "axios";

export const getWeatherForecast = async (lat, lon, api_key) => {
  try {
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`
    );
    console.log(response);
  } catch (err) {
    console.error(err);
  }
};

export const getCityMeridian = async (cityName, api_key) => {
  try {
    const response = await Axios.get(
      `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=10&appid=${api_key}`,
      { mode: "cors" }
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
