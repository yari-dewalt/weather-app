const API_KEY = "d679f5647a6d4e16a6522939232510";

async function test_function(city_name) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city_name}`,
    { mode: "cors" }
  );

  const weather_data = await response.json();
  console.log(weather_data);

  const location = `${weather_data.location.name}, ${weather_data.location.region}`;
  console.log(location);

  const temperature_fahrenheit = weather_data.current.temp_f;
  console.log(temperature_fahrenheit);

  const condition = weather_data.current.condition.text;
  console.log(condition);
}

export { test_function };
