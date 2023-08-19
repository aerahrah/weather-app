import React, { useEffect, useState } from "react";
import { getCityMeridian } from "../api/weather_api";
import { Combobox } from "@headlessui/react";
import debounce from "lodash/debounce";

const SearchCityName = () => {
  const [cityName, setCityName] = useState("");
  const [cityDetails, setCityDetails] = useState(null);

  const debouncedHandleSubmitInputCity = debounce((inputCityName) => {
    inputCityName
      ? getCityMeridian(inputCityName)
          .then((data) => {
            const response = data.map((data, idx) => ({
              id: idx,
              city: `${data.name}, ${data.country}`,
              values: `${data.lat} ${data.lon}`,
            }));
            setCityDetails(response);
          })
          .catch((err) => {
            console.error(err);
          })
      : setCityDetails(null);
  }, 200);

  const CityOption = React.memo(({ city }) => (
    <Combobox.Option
      className="cursor-pointer hover:bg-green-300 p-1 px-2"
      key={city.id}
      value={city.city}
    >
      {city.city}
    </Combobox.Option>
  ));

  useEffect(() => {
    debouncedHandleSubmitInputCity(cityName);
    return () => {
      debouncedHandleSubmitInputCity.cancel();
    };
  }, [cityName]);

  return (
    <div className="rounded-md">
      <Combobox value={cityName} as="div" className="relative">
        <Combobox.Input
          placeholder="Enter city name"
          className="outline-0 min-w-[16rem] w-[35vw] s py-1 px-2 rounded-sm"
          onChange={(event) => {
            setCityName(event.target.value);
          }}
        />
        {cityDetails?.length > 0 && (
          <Combobox.Options className="absolute bg-white w-full mt-1 py-2 rounded-md shadow">
            {cityDetails.map((city) => (
              <CityOption key={city.id} city={city} />
            ))}
          </Combobox.Options>
        )}
      </Combobox>
    </div>
  );
};

export default SearchCityName;
