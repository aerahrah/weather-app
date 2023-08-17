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
  return dayName;
};
