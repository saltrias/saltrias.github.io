
const websiteName = "saltrias!";
const websiteNameDiv = document.getElementById("websiteName");

for (let l = 0; l < websiteName.length; l++) {
  let letter = websiteName.charAt(l);
  let letterSpan = document.createElement("span");
  let verticalVariance = 0;
  letterSpan.innerText = letter;
  if (l < websiteName.length-1) {
    verticalVariance = Math.round(Math.random() * 3);
  }
  else {
    verticalVariance = 4;
  }
  letterSpan.style = `
  font-size: 24px;
  margin-top: ${20-verticalVariance}px;
  `;
  websiteNameDiv.appendChild(letterSpan);
}

console.log(websiteNameDiv);
console.log(websiteName.charAt(websiteName.length-1));

