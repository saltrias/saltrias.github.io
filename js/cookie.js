/*
\\\\\\\\\\\\\\\\\\
\ cookie section \
\\\\\\\\\\\\\\\\\\
*/

let acceptedCookies = false;
let buttonAlreadyClikced = false;

let cookiePopUpDiv = document.getElementById("cookiePopUp");
let cookieButtonDiv = document.getElementById("cookieButtons");

let acceptCookieButton = document.getElementById("acceptCookies");
let rejectCookieButton = document.getElementById("rejectCookies");
let cookieP = document.getElementById("cookieText");

function removeCookiePopUp() {
  cookiePopUpDiv.remove();
}

export function createCookie(CookieParams) { // input = dict
  let maxAge = 60 * 60 * 24 * 365 * 3; // too ambitious i know
  document.cookie = `cookiesAccepted=true; path=/; max-age=${maxAge}`;
  document.cookie = `theme=dark; path=/; max-age=${maxAge}`;
  document.cookie = `reduced-color=false; path=/; max-age=${maxAge}`;
}

acceptCookieButton.onclick = function () {
  if (buttonAlreadyClikced) {
    return;
  }

  buttonAlreadyClikced = true;

  acceptedCookies = true;
  createCookie();
  cookieP.innerText = "thanks for accepting them :)";
  cookieButtonDiv.remove();
  setTimeout(removeCookiePopUp, 5000);
};

rejectCookieButton.onclick = function () {
  if (buttonAlreadyClikced) {
    return;
  }

  buttonAlreadyClikced = true;
  cookieP.innerText = "why did you reject them :(";
  cookieButtonDiv.remove();
  setTimeout(removeCookiePopUp, 5000);
};

function dictCookie() {
  // stupid chatgpt code idkwtfitdoes
  const cookies = document.cookie.split(";"); // ["name=value", ...]
  const dict = {};

  cookies.forEach((cookie) => {
    const [name, value] = cookie.trim().split("=");
    dict[name] = value;
  });
  return dict;
}

if (document.cookie !== "") {
  removeCookiePopUp();
}