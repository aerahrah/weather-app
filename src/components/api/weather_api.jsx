import Axios from "axios";

const api_key = import.meta.env.VITE_API_KEY;

export const getCurrentWeatherForecast = async (lat, lon) => {
  try {
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`
    );

    return response.data;
  } catch (err) {
    throw err;
  }
};

export const getWeatherForecast = async (lat, lon) => {
  try {
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api_key}`
    );
    return response.data;
  } catch (err) {
    throw err;
  }
};
export const getAirQualityIndex = async (lat, lon) => {
  try {
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${lat}&lon=${lon}&appid=${api_key}`
    );

    return response.data;
  } catch (err) {
    throw err;
  }
};
export const getCityMeridian = async (cityName) => {
  try {
    const response = await Axios.get(
      `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${api_key}`
    );

    return response.data;
  } catch (err) {
    throw err;
  }
};
