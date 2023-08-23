import Axios from "axios";

const api_key = import.meta.env.VITE_API_KEY;

export const getCurrentWeatherForecast = async (lat, lon) => {
  try {
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`
    );
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const getWeatherForecast = async (lat, lon) => {
  try {
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api_key}`
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
export const getAirQualityIndex = async (lat, lon) => {
  try {
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${lat}&lon=${lon}&appid=${api_key}`
    );

    return response.data;
  } catch (err) {
    console.error(err);
  }
};
export const getCityMeridian = async (cityName) => {
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
