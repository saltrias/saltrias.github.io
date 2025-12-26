// import { loadCookie } from "./cookie.js";
// // import { map, rounded } from "../helper/utils.js";

// export function loadCSSCookie() {
//   const pageType = document.body.id; // this is NOT stupid

//   let cookie = loadCookie() || {};
//   let root = document.documentElement;

//   // I am still putting this cause
//   // If i remove these variables everything just breaks
//   const theme = "dark";
//   const reducedColor = "false";
//   // let d = new Date();

//   // thou shalt put all variables in :root
//   function setProperty(cssVar, val) {
//     root.style.setProperty(cssVar, val);
//   }

//   // I am terribly sorry if you prefer light mode
//   // I simply do not have the resources to continue this feature
//   // Well i might revive this sometime but right now, its too complicated

//   function applyTheme() {
//     // if (theme == "light") {
//     //   // i know i can just varslop this
//     //   // but idc mannn
//     //   setProperty("--background-color", "#fff");
//     //   setProperty("--text-color", "#000");
//     // } else {
//     setProperty("--background-color", "#03030d"); // finetuned from an IPS thinkpad
//     setProperty("--text-color", "#fff");
//     // }
//   }

//   function mainPage() {
//     let kanjiTimeDiv = document.getElementById("kanjiTime");
//     let cookiePopUp = document.getElementById("cookiePopUp");

//     function kanjiTimeSetColors() {
//       let kanjiTimeList = ["year", "month", "day", "hour", "minute", "second"];

//       function kanjiTimeSetAllColors(color) {
//         kanjiTimeList.forEach((el) => {
//           setProperty(`--kanji-${el}-color`, color);
//         });
//       }

//       for (let i = 0; i < kanjiTimeList.length; i++) {
//         const el = kanjiTimeList[i];
//         setProperty(`--kanji-${el}-color`, `hsl(${i * 60}, 80%, 60%)`);
//       }

//       if (reducedColor == "true") {
//         if (theme == "light") {
//           kanjiTimeSetAllColors("#000");
//         } else {
//           kanjiTimeSetAllColors("#fff");
//         }
//       }
//     }

//     function weatherSetColors() {
//       let weatherList = ["weather-wind-speed", "weather-wind-direction", "weather-elevation"];

//       function weatherSetAllColors(color) {
//         weatherList.forEach((el) => {
//           setProperty(`--${el}-color`, color);
//         });
//       }

//       for (let i = 0; i < weatherList.length; i++) {
//         const el = weatherList[i];
//         setProperty(`--${el}-color`, `hsl(${150 + i * 30}, 80%, 50%)`);
//       }

//       if (reducedColor == "true") {
//         if (theme == "dark") {
//           weatherSetAllColors("#fff");
//         }
//       }

//       if (theme == "light") weatherSetAllColors("000");
//     }

//     kanjiTimeSetColors();
//     weatherSetColors();
//     applyTheme();
//   }

//   switch (pageType) {
//     case "mainPage":
//       mainPage();
//       break;

//     default:
//       console.warn("le is stupid wtf is this page??");
//       applyTheme();
//       break;
//   }
// }

// document.addEventListener("DOMContentLoaded", loadCSSCookie);
