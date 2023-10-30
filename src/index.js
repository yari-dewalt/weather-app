import {
  update_current_info,
  update_forecast,
  setup_hourly_info,
  update_hourly_info_before,
  update_hourly_info_next,
} from "./info";

import { get_three_day_forecast, get_current_data } from "./weatherapi";

const form = document.getElementById("form");
const input = document.getElementById("city");
let selected_day = 0;

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  window.current_info = await get_current_data(input.value);
  window.forecast_info = await get_three_day_forecast(input.value);
  update_current_info(window.current_info);
  update_forecast(window.forecast_info);
  setup_hourly_info(window.forecast_info[0]);
});

let left_arrow = document.getElementById("left-arrow");
left_arrow.addEventListener("click", () => {
  let hour = document.getElementById("hour-1-time");
  let context = hour.textContent.split(" ")[1];
  hour = hour.textContent.split(" ")[0];
  hour = parseInt(hour);
  if (context === "pm") {
    hour += 12;
  } else if (hour === 12 && context === "am") {
    hour -= 12;
  }

  update_hourly_info_before(window.forecast_info[selected_day], hour);
});

let right_arrow = document.getElementById("right-arrow");
right_arrow.addEventListener("click", () => {
  let hour = document.getElementById("hour-1-time");
  let context = hour.textContent.split(" ")[1];
  hour = hour.textContent.split(" ")[0];
  hour = parseInt(hour);
  if (context === "pm") {
    hour += 12;
  } else if (hour === 12 && context === "am") {
    hour -= 12;
  }

  if (hour === 16) {
    return;
  }

  update_hourly_info_next(window.forecast_info[selected_day], hour);
});

const days = document.getElementsByClassName("day-card");
Array.from(days).forEach((day, index) => {
  day.addEventListener("click", () => {
    Array.from(days).forEach((day) => {
      day.className = "day-card";
    });
    day.className = "day-card selected";
    setup_hourly_info(window.forecast_info[index]);
    selected_day = index;
  });
});
