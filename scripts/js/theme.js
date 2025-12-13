import { loadCookie } from "./cookie.js";

export function loadCSSCookie() {
  const pageType = document.body.dataset.page; // this is stupid

  let cookie = loadCookie() || {};
  let root = document.documentElement;

  const theme = cookie.theme || "light";
  const reducedColor = cookie.reducedColor || "false";

  function mainPage() {
    let kanjiTimeDiv = document.getElementById("kanjiTime");
    let cookiePopUp = document.getElementById("cookiePopUp");

    function kanjiTimeSetColors() {
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

      if (reducedColor == "true") {
        if (theme == "light") {
          kanjiTimeSetAllColors("#000");
        } else {
          kanjiTimeSetAllColors("#fff");
        }
      }
    }

    function weatherSetColors() {
      let weatherList = ["weather-wind-speed", "weather-wind-direction", "weather-elevation"];
      let weatherRightRowDiv = document.getElementById("weatherRightRow");

      function weatherSetAllColors(color) {
        weatherList.forEach((el) => {
          weatherRightRowDiv.style.setProperty(`--${el}-color`, color);
        });
      }

      
      for (let i = 0; i < weatherList.length; i++) {
        const el = weatherList[i];
        weatherRightRowDiv.style.setProperty(`--${el}-color`, `hsl(${150 + i * 30}, 80%, 50%)`);
      }

      if (reducedColor == "true") {
        if (theme == "dark") {
          weatherSetAllColors("#fff");
        }
      }

      if (theme == "light") weatherSetAllColors("000");
    }

    if (theme == "light") {
      root.style.setProperty("--background-color", "#fff");
      root.style.setProperty("--text-color", "#000");
      if (cookiePopUp) cookiePopUp.style.border = "solid 2px #000";
      kanjiTimeSetColors();
      weatherSetColors();
    } else {
      root.style.setProperty("--background-color", "#000");
      root.style.setProperty("--text-color", "#fff");
      // if you remove this if
      // it just breaks im sorry
      if (cookiePopUp) cookiePopUp.style.border = "solid 2px #fff";
      kanjiTimeSetColors();
      weatherSetColors();
    }
  }

  function settingsPage() {
    if (theme == "light") {
      // console.log("is light");
      root.style.setProperty("--background-color", "#fff");
      root.style.setProperty("--text-color", "#000");
    } else {
      // console.log("is dark");
      root.style.setProperty("--background-color", "#000");
      root.style.setProperty("--text-color", "#fff");
    }
  }

  function assetViewer() {
    if (theme == "light") {
      root.style.setProperty("--background-color", "#fff");
      root.style.setProperty("--text-color", "#000");
    } else {
      root.style.setProperty("--background-color", "#000");
      root.style.setProperty("--text-color", "#fff");
    }
  }

  function languagePage() {} // TODO: please do rest of them

  function postsPage() {}

  switch (pageType) {
    case "mainPage":
      mainPage();
      break;

    case "settingsPage":
      settingsPage();
      break;

    case "assetViewerPage":
      assetViewer();
      break;

    case "languagePage":
      languagePage();
      break;

    case "postsPage":
      postsPage();
      break;
    default:
      console.log("bitch wtf is u talking about");
  }
}

document.addEventListener("DOMContentLoaded", loadCSSCookie);
