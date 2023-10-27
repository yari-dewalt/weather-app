import { format } from "date-fns";

const API_KEY = "d679f5647a6d4e16a6522939232510";

async function get_current_data(city_name) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city_name}`,
    { mode: "cors" }
  );

  const weather_data = await response.json();
  console.log(weather_data);

  const location = weather_data.location.name;
  console.log(location);

  const region = weather_data.location.region;
  console.log(region);

  const localtime = weather_data.location.localtime;
  const date = localtime.split(" ")[0];
  const time = localtime.split(" ")[1];
  let year = date.split("-")[0];
  let month = date.split("-")[1];
  let day = date.split("-")[2];
  let hours = time.split(":")[0];
  let minutes = time.split(":")[1];
  const date_time = format(
    new Date(year, String(parseInt(month) - 1), day, hours, minutes),
    "iiii, do LLL ''yy hh:mm b"
  );

  console.log(date_time);

  const temperature_fahrenheit = weather_data.current.temp_f;
  console.log(temperature_fahrenheit);

  const condition = weather_data.current.condition.text;
  console.log(condition);

  const condition_icon = weather_data.current.condition.icon.substring(2);

  return [
    location,
    region,
    date_time,
    temperature_fahrenheit,
    condition,
    condition_icon,
  ];
}

async function three_day_forecast(city_name, days) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city_name}&days=${days}`,
    { mode: "cors" }
  );

  const weather_data = await response.json();

  const current_data = weather_data.current;
  console.log(current_data);

  const forecast_data = weather_data.forecast;
  console.log(forecast_data);

  const first_day_data = forecast_data.forecastday[0];
  console.log(first_day_data);

  const second_day_data = forecast_data.forecastday[1];
  console.log(second_day_data);

  const third_day_data = forecast_data.forecastday[2];
  console.log(third_day_data);
}

export { get_current_data };
export { three_day_forecast };
