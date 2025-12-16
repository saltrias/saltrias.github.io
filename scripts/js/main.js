import { getWeather } from "./weather.js";
import { updateKanjiTime } from "./kanjiTime.js";
import { initCookies } from "./cookie.js";
import { loadCSSCookie } from "./theme.js";
// import { randomButton } from "./randomButton.js";

async function main() {
  getWeather();
  updateKanjiTime();
  initCookies();
  loadCSSCookie();
  // randomButton();

  setInterval(updateKanjiTime, 1000);
  setInterval(getWeather, 15 * 60 * 1000);
}

document.addEventListener("DOMContentLoaded", main);