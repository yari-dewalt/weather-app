import { test_function } from "./weatherapi";

const form = document.getElementById("form");
const input = document.getElementById("city");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  test_function(input.value);
  input.value = "";
});
