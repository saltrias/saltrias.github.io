import { createCookie, loadCookie } from "./cookie.js";

let darkModeRadio = document.getElementById("DarkModeRadio");
let lightModeRadio = document.getElementById("LightModeRadio");

let reducedColorCheckbox = document.getElementById("ReducedColorCheckbox");
let applyChangesBtn = document.getElementById("ApplyChanges");

let cTheme;
let cReducedColorCheckbox;

function preloadCookies() {
  let cookie = loadCookie();
  console.log(cookie);

  if (cookie.theme == "dark") {
    darkModeRadio.checked = true;
  }
  else {
    lightModeRadio.checked = true;
  }

  if (cookie.reducedColor == "true") {
    reducedColorCheckbox.checked = true;
  }
}

function createCookieParams() {
  let dict = {};

  if (darkModeRadio.checked) {
    cTheme = "dark";
  }
  if (lightModeRadio.checked) {
    cTheme = "light";
  }
  if (reducedColorCheckbox.checked) {
    cReducedColorCheckbox = "true"; 
  } else {
    cReducedColorCheckbox = "false";
  }

  dict = {
    theme: cTheme,
    reducedColor: cReducedColorCheckbox,
  };

  return dict;
}

applyChangesBtn.onclick = function () {
  let cookieParams = createCookieParams();
  createCookie(cookieParams);
};

/* let CookieParams = {
  "theme": ""
}; */

document.addEventListener("DOMContentLoaded", preloadCookies);