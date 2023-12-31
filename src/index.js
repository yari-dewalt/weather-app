import {
  update_current_info,
  update_forecast,
  setup_hourly_info,
  update_hourly_info_before,
  update_hourly_info_next,
} from "./info";

import { get_three_day_forecast, get_current_data } from "./weatherapi";

let loading = true;

let content = document.getElementById("content");
let loading_screen = document.getElementById("loading-screen");
const first_day_card = document.getElementById("day-0");

if (loading) {
  loading_screen.style.display = "block";
  for (const child of content.children) {
    child.style.display = "none";
  }
}

window.current_info = await get_current_data("Los Angeles");
window.forecast_info = await get_three_day_forecast("Los Angeles");
update_current_info(window.current_info);
update_forecast(window.forecast_info);
setup_hourly_info(window.forecast_info[0]);
first_day_card.className = "day-card selected";

let selected_hour_time;

selected_hour_time =
  document.getElementsByClassName("hour-card selected")[0].firstElementChild
    .textContent;

loading = false;
if (!loading) {
  loading_screen.style.display = "none";
  for (const child of content.children) {
    child.style.display = "";
  }
}

const form = document.getElementById("form");
const input = document.getElementById("city");
let selected_day = 0;
const days = document.getElementsByClassName("day-card");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  loading = true;
  if (loading) {
    loading_screen.style.display = "block";
  }

  try {
    window.current_info = await get_current_data(input.value);
    window.forecast_info = await get_three_day_forecast(input.value);
    update_current_info(window.current_info);
    update_forecast(window.forecast_info);
    setup_hourly_info(window.forecast_info[0]);
  } catch (error) {
    loading = false;
  }

  selected_hour_time =
    document.getElementsByClassName("hour-card selected")[0].firstElementChild
      .textContent;

  Array.from(days).forEach((day) => {
    day.className = "day-card";
  });

  first_day_card.className = "day-card selected";

  loading = false;
  if (!loading) {
    loading_screen.style.display = "none";
    for (const child of content.children) {
      child.style.display = "";
    }
  }
});

let dots = document.getElementsByClassName("dot");
Array.from(dots).forEach((dot, i) => {
  dot.addEventListener("click", () => {
    Array.from(dots).forEach((dot) => {
      dot.className = "dot";
    });
    dot.className = "dot selected";
    let hour;
    switch (i) {
      case 0:
        hour = -1;
        break;
      case 1:
        hour = 16;
        break;
      case 2:
        hour = 24;
        break;
    }

    update_hourly_info_next(window.forecast_info[selected_day], hour);

    let hour_cards = document.getElementsByClassName("hour-card");
    Array.from(hour_cards).forEach((hour) => {
      hour.className = "hour-card";
      if (hour.firstElementChild.textContent === selected_hour_time) {
        hour.className = "hour-card selected";
      }
    });
  });
});

let left_arrow = document.getElementById("left-arrow");
left_arrow.addEventListener("click", () => {
  let selected_dot_index;
  Array.from(dots).forEach((dot, i) => {
    if (dot.className === "dot selected") {
      selected_dot_index = i;
    }
  });
  if (selected_dot_index !== 0) {
    dots[selected_dot_index].className = "dot";
  }
  dots[selected_dot_index - 1].className = "dot selected";
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

  let hour_cards = document.getElementsByClassName("hour-card");
  Array.from(hour_cards).forEach((hour) => {
    hour.className = "hour-card";
    if (hour.firstElementChild.textContent === selected_hour_time) {
      hour.className = "hour-card selected";
    }
  });
});

let right_arrow = document.getElementById("right-arrow");
right_arrow.addEventListener("click", () => {
  let selected_dot_index;
  Array.from(dots).forEach((dot, i) => {
    if (dot.className === "dot selected") {
      selected_dot_index = i;
    }
  });
  if (selected_dot_index !== 2) {
    dots[selected_dot_index].className = "dot";
  }
  dots[selected_dot_index + 1].className = "dot selected";
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

  let hour_cards = document.getElementsByClassName("hour-card");
  Array.from(hour_cards).forEach((hour) => {
    hour.className = "hour-card";
    if (hour.firstElementChild.textContent === selected_hour_time) {
      hour.className = "hour-card selected";
    }
  });
});

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
