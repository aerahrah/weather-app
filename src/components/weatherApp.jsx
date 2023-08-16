import React, { useEffect, useState } from "react";
import { getCityMeridian } from "./api/weather_api";

const WeatherApp = () => {
  const api_key = import.meta.env.VITE_API_KEY;
  const [cityName, setCityName] = useState("");
  const [isMeridianEmpty, setIsMeridianEmpty] = useState(false);
  const [meridian, setMeridian] = useState({
    lat: "",
    lon: "",
    state: "",
    country: "",
  });

  const handleSubmitInputCity = () => {
    getCityMeridian(cityName, api_key)
      .then((data) => {
        console.log(data[0]);
        setMeridian({
          lat: data[0].lat,
          lon: data[0].lon,
          state: data[0].state,
          country: data[0].country,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    setIsMeridianEmpty(Object.values(meridian).every((value) => value !== ""));
  }, [meridian]);

  return (
    <div>
      <div>
        <input
          type="text"
          value={cityName}
          placeholder="Enter city name..."
          onChange={(e) => setCityName(e.target.value)}
        />
        <button onClick={handleSubmitInputCity}>submit</button>
      </div>
      <div>
        {isMeridianEmpty && (
          <ul>
            <li>Latitude: {meridian.lat}</li>
            <li>Longitude: {meridian.lon}</li>
            <li>State: {meridian.state}</li>
            <li>Country: {meridian.country}</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default WeatherApp;
