function loadCookie() {
  // stupid chatgpt code idkwtfitdoes
  const cookies = document.cookie.split(";"); // ["name=value", ...]
  const dict = {};

  cookies.forEach((cookie) => {
    const [name, value] = cookie.trim().split("=");
    dict[name] = value;
  });
  return dict;
}

export function loadCSSCookie() {
  let cookie = loadCookie();

  let root = document.documentElement;
  let cookiePopUp = document.getElementById("cookiePopUp");

  let kYear = document.getElementById("kanjiYear");
  let kMonth = document.getElementById("kanjiMonth");
  let kDay = document.getElementById("kanjiDay");
  let kHour = document.getElementById("kanjiHour");
  let kMinute = document.getElementById("kanjiMinute");
  let kSecond = document.getElementById("kanjiSecond");
  let kanjiElements = [kYear, kMonth, kDay, kHour, kMinute, kSecond];

  if (cookiePopUp) return;

  if (cookie.theme == "dark") {
    root.style.setProperty("--body-background", "#000");
    root.style.setProperty("--text-color", "#fff");
    // if you remove this if
    // it just breaks im sorry
    if (cookiePopUp) cookiePopUp.style.border = "solid 2px #fff";
  } else {
    root.style.setProperty("--body-background", "#fff");
    root.style.setProperty("--text-color", "#000");
    if (cookiePopUp) cookiePopUp.style.border = "solid 2px #000";
  }

  kanjiElements.forEach((el) => {
    if (!el) return;

    if (cookie.reducedColor == "true") {
      el.classList.add("reduced-color");
    } else {
      el.classList.remove("reduced-color");
    }
  });
}
