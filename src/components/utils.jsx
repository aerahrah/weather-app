export const kevToCelcius = (data) => {
  const celcius = data - 273.15;
  return celcius.toFixed(0);
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
