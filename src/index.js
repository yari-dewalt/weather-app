import { get_current_data } from "./weatherapi";
import { three_day_forecast } from "./weatherapi";

const form = document.getElementById("form");
const input = document.getElementById("city");
let current_location = document.getElementById("current-location");
let current_region = document.getElementById("current-region");
let current_date_time = document.getElementById("current-date-time");
let current_temperature = document.getElementById("current-temperature");
let current_weather = document.getElementById("current-weather");
let current_weather_icon = document.getElementById("current-weather-icon");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const info = await get_current_data(input.value);

  const location = info[0];
  current_location.textContent = location;

  const region = info[1];
  current_region.textContent = region;

  const date_time = info[2];
  current_date_time.textContent = date_time;

  const temperature_fahrenheit = info[3];
  current_temperature.textContent = temperature_fahrenheit;

  const condition = info[4];
  current_weather.textContent = condition;

  const condition_icon = info[5];
  current_weather_icon.setAttribute("src", `https://${condition_icon}`);

  console.log(info);
  input.value = "";
});

three_day_forecast("Redding", 3);
