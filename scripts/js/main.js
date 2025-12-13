import { getWeather } from "./weather.js";
import { updateKanjiTime } from "./kanjiTime.js";
import { initCookies } from "./cookie.js";
import { loadCSSCookie } from "./theme.js";
import { randomButton } from "./randomButton.js";

async function main() {
  let CSSChangeRate = 1000/60;

  getWeather();
  updateKanjiTime();
  initCookies();
  loadCSSCookie();
  randomButton();

  setInterval(updateKanjiTime, 1000);
  setInterval(getWeather, 15 * 60 * 1000);
  setInterval(loadCSSCookie, CSSChangeRate);
}

document.addEventListener("DOMContentLoaded", main);