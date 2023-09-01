const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const daysOfWeekMobile = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const kevToCelcius = (data) => {
  const celcius = data - 273.15;
  return celcius.toFixed(0);
};

export const convertTimezone = (timezone) => {
  const hours = Math.abs(Math.floor(timezone / 3600));
  const remainingSeconds = Math.abs(timezone % 3600);
  const minutes = Math.floor(remainingSeconds / 60);
  const sign = timezone >= 0 ? "+" : "-";

  const formattedTimeZone = `${sign}${hours < 10 ? "0" : ""}${hours}:${
    minutes < 10 ? "0" : ""
  }${minutes}`;
  return formattedTimeZone;
};
export const convertTimestampHours = (dt) => {
  const timePart = new Date(dt * 1000);
  const hours = timePart.getHours();
  const minutes = timePart.getMinutes();

  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;

  const timeDisplay = `${formattedHours}:${
    minutes < 10 ? "0" : ""
  }${minutes} ${ampm}`;
  return timeDisplay;
};

export const convertTxtToHours = (dt_txt) => {
  const timePart = dt_txt.split(" ")[1];
  const timeOnly = timePart.split(":").slice(0, 2).join(":");

  return timeOnly;
};

export const convertTxtToDayName = (dt_txt) => {
  const date = new Date(dt_txt.split(" ")[0]);
  const dayOfWeek = daysOfWeek[date.getDay()];

  return dayOfWeek;
};
export const convertTimestamp = (dt, isMobile) => {
  const date = new Date(dt * 1000);
  const dayOfWeek = date.getDay();

  let dayName;
  let month;
  const day = date.getDate();
  if (isMobile) {
    month = date.toLocaleString("default", { month: "short" });
    dayName = daysOfWeekMobile[dayOfWeek];
  } else {
    month = date.toLocaleString("default", { month: "long" });
    dayName = daysOfWeek[dayOfWeek];
  }

  return `${dayName}, ${day} ${month}`;
};

export const aqiCheck = (aqi) => {
  switch (aqi) {
    case 1:
      return { label: "good", color: "#9AE6B4" };
    case 2:
      return { label: "fair", color: "#FAF089" };
    case 3:
      return { label: "moderate", color: "#FBD38D" };
    case 4:
      return { label: "poor", color: "#FEB2B2" };
    case 5:
      return { label: "very poor", color: "#D6BCFA" };
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
