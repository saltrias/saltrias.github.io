/*
\\\\\\\\\\\\\\\\\\
\ cookie section \
\\\\\\\\\\\\\\\\\\
*/

function removeCookiePopUp() {
  document.getElementById("cookiePopUp").remove();
}

export function createCookie(CookieParams = {"theme": "light", "reducedColor": "false"}) {
  // input = dict
  let maxAge = 60 * 60 * 24 * 365 * 3; // too ambitious i know

  document.cookie = `cookiesAccepted=true; path=/; max-age=${maxAge}`;
  document.cookie = `theme=${CookieParams.theme}; path=/; max-age=${maxAge}`;
  document.cookie = `reducedColor=${CookieParams.reducedColor}; path=/; max-age=${maxAge}`;
}

export function loadCookie() {
  // stupid chatgpt code idkwtfitdoes
  const cookies = document.cookie.split(";"); // ["name=value", ...]
  const dict = {};

  cookies.forEach((cookie) => {
    const [name, value] = cookie.trim().split("=");
    dict[name] = value;
  });
  return dict;
}

export function initCookies() {
  let acceptedCookies = false;
  let buttonAlreadyClikced = false;
  
  let cookieButtonDiv = document.getElementById("cookieButtons");

  let acceptCookieButton = document.getElementById("acceptCookies");
  let rejectCookieButton = document.getElementById("rejectCookies");
  let cookieP = document.getElementById("cookieText");

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

  if (document.cookie !== "") {
    removeCookiePopUp();
  }
}
