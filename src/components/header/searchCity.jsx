import React, { useEffect, useState } from "react";
import { getCityMeridian } from "../api/weather_api";
import { Combobox } from "@headlessui/react";
import debounce from "lodash/debounce";
import { FaSearchLocation } from "react-icons/fa";

const SearchCityName = ({ handleOnSearchChange }) => {
  const [cityName, setCityName] = useState("");
  const [cityDetails, setCityDetails] = useState(null);

  const debouncedHandleSubmitInputCity = debounce((inputCityName) => {
    inputCityName
      ? getCityMeridian(inputCityName)
          .then((data) => {
            const response = data.map((data, idx) => ({
              id: idx,
              city: `${data.name}${data.state ? ", " + data.state : ""}, ${
                data.country
              }`,
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
      className="cursor-pointer hover:bg-blue-200 p-1 px-6 border-b-[1px] border-blue-100"
      key={city.id}
      value={city.city}
      onClick={() => {
        handleOnSearchChange(city.values);
        setCityName(city.city);
      }}
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
    <div className="w-full rounded-md">
      <Combobox value={cityName} as="div" className="relative">
        <div className="relative flex items-center w-full py-3">
          <FaSearchLocation className="absolute text-gray-600 left-[.75rem]" />
          <Combobox.Input
            placeholder="Enter city name"
            className="w-full p-1.5 pl-10 rounded-full outline-0 bg-blue-50 shadow-inner text-lg"
            value={cityName}
            onChange={(event) => {
              setCityName(event.target.value);
            }}
          />
        </div>

        {cityDetails?.length > 0 && (
          <Combobox.Options className="absolute w-full bg-white mt-1 py-2 rounded-md shadow-md">
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
