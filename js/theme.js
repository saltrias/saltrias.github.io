import { loadCookie } from "./cookie.js";

export function loadCSSCookie() {
  let cookie = loadCookie();

  let root = document.documentElement;
  let kanjiTimeDiv = document.getElementById("kanjiTime");
  let cookiePopUp = document.getElementById("cookiePopUp");

  function kanjiTimeSetColors(theme) {
    let kanjiTimeList = ["year", "month", "day", "hour", "minute", "second"];

    function kanjiTimeSetAllColors(color) {
      kanjiTimeList.forEach((el) => {
        kanjiTimeDiv.style.setProperty(`--kanji-${el}-color`, color);
      });
    }

    for (let i = 0; i < kanjiTimeList.length; i++) {
      const el = kanjiTimeList[i];
      kanjiTimeDiv.style.setProperty(`--kanji-${el}-color`, `hsl(${i * 60}, 80%, 60%)`);
    }

    if (cookie.reducedColor == "true") {
      if (theme == "light") {
        kanjiTimeSetAllColors("hsl(0, 0%, 0%)");
      } else {
        kanjiTimeSetAllColors("hsl(0, 0%, 100%)");
      }
    }
  }

  if (cookie.theme == "light") {
    root.style.setProperty("--body-background", "#fff");
    root.style.setProperty("--text-color", "#000");
    if (cookiePopUp) cookiePopUp.style.border = "solid 2px #000";
    kanjiTimeSetColors("dark");
  } else {
    root.style.setProperty("--body-background", "#000");
    root.style.setProperty("--text-color", "#fff");
    // if you remove this if
    // it just breaks im sorry
    if (cookiePopUp) cookiePopUp.style.border = "solid 2px #fff";
    if (cookie.reducedColor == "true") kanjiTimeSetColors("dark");
  }
}
