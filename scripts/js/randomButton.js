/* let htmlList;

async function loadHTMLList() {
  try {
    const response = await fetch("scripts/json/html-list.json");
    htmlList = await response.json();
  } catch (err) {
    Aconsaole.error("uh oh something happened:", err);
  }
}

export async function randomButton() {
  if (!htmlList) await loadHTMLList();

  const randomButtonElem = document.getElementById("sidebarRandom");
  const len = htmlList.length;
  const randIndex = Math.floor(Math.random() * len); // integer index
  const link = htmlList[randIndex];

  randomButtonElem.href = link;
} */