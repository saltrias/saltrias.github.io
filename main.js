import { getWeather } from "./js/weather.js";
import { updateKanjiTime } from "./js/kanjiTime.js";
import "./js/cookie.js";
import { loadCSSCookie } from "./js/theme.js";

async function main() {
  getWeather();
  updateKanjiTime();
  loadCSSCookie();

  setInterval(updateKanjiTime, 1000);
  setInterval(getWeather, 15 * 60 * 1000);
}

document,addEventListener("DOMContentLoaded", main);