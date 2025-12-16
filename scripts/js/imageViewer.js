// hi

let BackButton = document.getElementById("BackButton");
let PreviousButton = document.getElementById("PreviousButton");
let OriginalButton = document.getElementById("OriginalButton");
let NextButton = document.getElementById("NextButton");
let RandomButton = document.getElementById("RandomButton");

let imageList = [];
let currentIndex = 0;
let ImageViewer = document.getElementById("image");
let imageName;
let path;
let linusChance = 1 / 1e4; // hehehehe..
let linusScareText = document.getElementById("linusScare");

async function loadImages() {
  try {
    const response = await fetch("../../scripts/json/image-list.json");
    imageList = await response.json();
  } catch (err) {
    console.log("uh oh somehing happened: " + err);
  }
}

function changeImage(changeInstruction) {
  if (linusChance > Math.random()) {
    ImageViewer.src = "../images/linus.jpeg";
    linusScareText.innerText = "boo! linus has appeared";
    return;
  }
  switch (changeInstruction) {
    case "PREVIOUS":
      currentIndex = (currentIndex - 1 + imageList.length) % imageList.length;
      break;
    case "NEXT":
      currentIndex = (currentIndex + 1) % imageList.length;
      break;
    case "RANDOM":
      currentIndex = Math.floor(Math.random() * imageList.length);
      break;
  }

  const imageName = imageList[currentIndex];
  const path = imageName;
  ImageViewer.src = path;
  linusScareText.innerText = "";
}

PreviousButton.onclick = function () {
  changeImage("PREVIOUS");
};

NextButton.onclick = function () {
  changeImage("NEXT");
};

RandomButton.onclick = function () {
  changeImage("RANDOM");
};

OriginalButton.onclick = function () {
  OriginalButton.innerText = "No.";
};

BackButton.onclick = function () {
  window.location.href = "https://saltrias.github.io";
};

loadImages();
