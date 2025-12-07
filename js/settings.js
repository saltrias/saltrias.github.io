import { createCookie } from "./cookie.js";

let darkModeRadio = document.getElementById("DarkModeRadio");
let lightModeRadio = document.getElementById("LightModeRadio");

let reducedColorCheckbox = document.getElementById("ReducedColorCheckbox");
let applyChangesBtn = document.getElementById("ApplyChanges");

let cTheme;
let cReducedColorCheckbox;

function createCookieParams() {
  let dict = {};

  if (darkModeRadio.checked) {
    cTheme = "dark";
  } else {
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
  console.log(cookieParams)
  createCookie(cookieParams);
};

/* let CookieParams = {
  "theme": ""
}; */
