export const kevToCelcius = (data) => {
  const celcius = data - 273.15;
  return celcius.toFixed(0);
};

export const convertTimestampHours = (dt) => {
  const date = new Date(dt * 1000);
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  const hoursWLabel = `${hours}:${minutes}`;

  return hoursWLabel;
};
export const convertTimestamp = (dt) => {
  const date = new Date(dt * 1000);
  const dayOfWeek = date.getDay();

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const dayName = daysOfWeek[dayOfWeek];
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });

  return `${dayName} ${day}, ${month}`;
};

export const aqiCheck = (aqi) => {
  switch (aqi) {
    case 1:
      return <p className="bg-green-400 rounded-full py-1 px-4">Good</p>;
    case 2:
      return <p className="bg-green-300 rounded-full py-1 px-4">Fair</p>;
    case 3:
      return <p className="bg-yellow-300 rounded-full py-1 px-4">Moderate</p>;
    case 4:
      return <p className="bg-orange-300 rounded-full py-1 px-4">Poor</p>;
    case 5:
      return <p className="bg-red-300 rounded-full py-1 px-4">Very Poor</p>;
  }
};

export const filterData = (data) => {
  if (data) {
    const filteredData = data.filter((item) =>
      item.dt_txt.endsWith("00:00:00")
    );
    return filteredData;
  }
};
