import { loadCookie } from "./cookie.js";
import { map, rounded } from "../helper/utils.js";

export function loadCSSCookie() {
  const pageType = document.body.id; // this is NOT stupid

  let cookie = loadCookie() || {};
  let root = document.documentElement;

  const theme = cookie.theme || "light";
  const reducedColor = cookie.reducedColor || "false";
  // let d = new Date();

  // thou shalt put all variables in :root
  function setProperty(cssVar, val) {
    root.style.setProperty(cssVar, val);
  }

  function mainPage() {
    let kanjiTimeDiv = document.getElementById("kanjiTime");
    let cookiePopUp = document.getElementById("cookiePopUp");

    function kanjiTimeSetColors() {
      let kanjiTimeList = ["year", "month", "day", "hour", "minute", "second"];

      function kanjiTimeSetAllColors(color) {
        kanjiTimeList.forEach((el) => {
          setProperty(`--kanji-${el}-color`, color);
        });
      }

      for (let i = 0; i < kanjiTimeList.length; i++) {
        const el = kanjiTimeList[i];
        setProperty(`--kanji-${el}-color`, `hsl(${i * 60}, 80%, 60%)`);
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

      function weatherSetAllColors(color) {
        weatherList.forEach((el) => {
          setProperty(`--${el}-color`, color);
        });
      }

      for (let i = 0; i < weatherList.length; i++) {
        const el = weatherList[i];
        setProperty(`--${el}-color`, `hsl(${150 + i * 30}, 80%, 50%)`);
      }

      if (reducedColor == "true") {
        if (theme == "dark") {
          weatherSetAllColors("#fff");
        }
      }

      if (theme == "light") weatherSetAllColors("000");
      
    }

    function randomButtonSetColors() {
      let randomLink = document.getElementById("sidebarRandom");
      console.log(reducedColor, theme)
      if (reducedColor == "true") {
        randomLink.classList.remove("rainbowText");
        if (theme == "light") {
          setProperty("--random-button-color", "#000")
        } else {
          setProperty("--random-button-color", "#fff");
        }
      }
    }
    
    if (theme == "light") {
      setProperty("--background-color", "#fff");
      setProperty("--text-color", "#000");
      if (cookiePopUp) cookiePopUp.style.border = "solid 2px #000";
      kanjiTimeSetColors();
      weatherSetColors();
      randomButtonSetColors();
    } else {
      setProperty("--background-color", "#000");
      setProperty("--text-color", "#fff");
      // if you remove this if
      // it just breaks im sorry
      if (cookiePopUp) cookiePopUp.style.border = "solid 2px #fff";
      kanjiTimeSetColors();
      weatherSetColors();
      randomButtonSetColors();
    }
  }

  function settingsPage() {
    if (theme == "light") {
      // console.log("is light");
      setProperty("--background-color", "#fff");
      setProperty("--text-color", "#000");
    } else {
      // console.log("is dark");
      setProperty("--background-color", "#000");
      setProperty("--text-color", "#fff");
    }
  }

  function assetViewer() {
    if (theme == "light") {
      setProperty("--background-color", "#fff");
      setProperty("--text-color", "#000");
    } else {
      setProperty("--background-color", "#000");
      setProperty("--text-color", "#fff");
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
      console.warn("le is stupid wtf is this page??");
  }
}

document.addEventListener("DOMContentLoaded", loadCSSCookie);
