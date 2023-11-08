const input = document.getElementById("city");

async function update_current_info(info) {
  let current_location = document.getElementById("current-location");
  let current_region = document.getElementById("current-region");
  let current_date_time = document.getElementById("current-date-time");
  let current_temperature = document.getElementById("current-temperature");
  let current_weather = document.getElementById("current-weather");
  let current_weather_icon = document.getElementById("current-weather-icon");

  const location = info[0];
  current_location.textContent = location;

  const region = info[1];
  current_region.textContent = region;

  const date_time = info[2];
  current_date_time.textContent = date_time;

  const temperature_fahrenheit = info[3];
  current_temperature.textContent = `${Math.round(temperature_fahrenheit)} °F`;

  const condition = info[4];
  current_weather.textContent = condition;

  const condition_icon = info[5];
  current_weather_icon.setAttribute("src", `https://${condition_icon}`);

  console.log(info);
  input.value = "";
}

async function update_forecast(info) {
  const days = document.getElementsByClassName("day-card");

  let i = 0;
  Array.from(days).forEach((day) => {
    let day_elements = day.children;
    day_elements[0].setAttribute(
      "src",
      `https://${info[i].day.condition.icon}`
    );
    day_elements[1].textContent = info[i].day.condition.text;
    day_elements[2].textContent = `${Math.round(info[i].day.maxtemp_f)} °F`;
    day_elements[3].textContent = `${Math.round(info[i].day.mintemp_f)} °F`;
    day_elements[4].textContent = `${info[i].day.avghumidity} %`;
    day_elements[5].textContent = `${Math.round(info[i].day.maxwind_mph)} mph`;
    i++;
  });
}

async function setup_hourly_info(info) {
  const current_hour = get_current_hour();

  let dots = document.getElementsByClassName("dot");
  Array.from(dots).forEach((dot) => {
    dot.className = "dot";
  });
  if (current_hour <= 8) {
    dots[0].className = "dot selected";
  } else if (current_hour <= 16) {
    dots[1].className = "dot selected";
  } else if (current_hour <= 24) {
    dots[2].className = "dot selected";
  }

  let hour_cards = document.getElementsByClassName("hour-card");
  Array.from(hour_cards).forEach((hour) => {
    hour.className = "hour-card";
  });

  let hour_card_selected = document.getElementById(
    `hour-${(current_hour % 8) + 1}`
  );
  hour_card_selected.className = "hour-card selected";

  hourly_data_helper(info, current_hour);
}

function get_current_hour() {
  // work around to get current hour instead of having to do another api request
  const date_time = document.getElementById("current-date-time");
  let current_hour = date_time.textContent.split(":")[0].slice(-2);
  current_hour = parseInt(current_hour);
  const context = date_time.textContent.split(":")[1].substring(3);

  if (context === "PM" || context == "noon") {
    current_hour += 12;
  } else if (context === "midnight") {
    current_hour -= 12;
  }

  return current_hour;
}

function update_hourly_info_before(day_info, hour) {
  hour -= 8;
  hourly_data_helper(day_info, hour);
}

function update_hourly_info_next(day_info, hour) {
  hour += 8;
  hourly_data_helper(day_info, hour);
}

function hourly_data_helper(day_info, current_hour) {
  const hours = document.getElementsByClassName("hour-card");

  let i = 0;
  if (current_hour > 7 && current_hour <= 15) {
    i = 8;
  } else if (current_hour > 15) {
    i = 16;
  }

  if (current_hour === 24) {
    i = 8;
  }

  Array.from(hours).forEach((hour) => {
    let hour_elements = hour.children;
    let time = day_info.hour[i].time.split(" ")[1].split(":")[0];
    if (parseInt(time.substring(0, 3)) > 12) {
      hour_elements[0].textContent = parseInt(time) - 12 + " pm";
    } else if (parseInt(time.substring(0, 3)) == 12) {
      hour_elements[0].textContent = parseInt(time) + " pm";
    } else if (parseInt(time.substring(0, 3)) < 12) {
      hour_elements[0].textContent = parseInt(time) + " am";
      if (parseInt(time.substring(0, 3)) == 0) {
        hour_elements[0].textContent = parseInt(time) + 12 + " am";
      }
    }

    hour_elements[1].textContent = `${Math.round(day_info.hour[i].temp_f)} °F`;
    hour_elements[2].setAttribute(
      "src",
      `https://${day_info.hour[i].condition.icon}`
    );
    i++;
  });
}

export { update_current_info };
export { update_forecast };
export { setup_hourly_info };
export { update_hourly_info_next };
export { update_hourly_info_before };
