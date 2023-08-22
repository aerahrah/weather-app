import React, { useEffect, useState } from "react";
import { getCityMeridian } from "../api/weather_api";
import { Combobox } from "@headlessui/react";
import debounce from "lodash/debounce";
import { FaSearch } from "react-icons/fa";

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
    <div className="rounded-md">
      <Combobox value={cityName} as="div" className="relative">
        <div className="relative flex items-center w-full py-3">
          <FaSearch className="text-gray-600 absolute left-[.75rem]" />
          <Combobox.Input
            placeholder="Enter city name"
            className="outline-0 w-[50vw] p-1.5 pl-10   text-lg rounded-full bg-blue-50 shadow-inner"
            value={cityName}
            onChange={(event) => {
              setCityName(event.target.value);
            }}
          />
        </div>

        {cityDetails?.length > 0 && (
          <Combobox.Options className="absolute bg-white w-full mt-1 py-2 rounded-md shadow-md">
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
