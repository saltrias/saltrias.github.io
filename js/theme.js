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

export function loadCSSCookie() {
  let cookie = dictCookie();

  let root = document.documentElement;
  let cookiePopUp = document.getElementById("cookiePopUp");

  if (cookie.theme == "dark") {
    root.style.setProperty("--body-background", "#000");
    root.style.setProperty("--text-color", "#fff");
    cookiePopUp.style.border = "solid 2px #fff"
  } else {
    root.style.setProperty("--body-background", "#fff");
    root.style.setProperty("--text-color", "#000");
    cookiePopUp.style.border = "solid 2px #000"
  }
}