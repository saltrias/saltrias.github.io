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

async function loadImages() {
  try {
    const response = await fetch("image-list.json");
    imageList = await response.json();
    console.log(imageList.length + " images loaded");
  } 
  catch (err) {
    console.log("uh oh somehing happened: "  + err);
  }
}

function changeImage(changeInstruction) {
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
  const path = "../images/" + imageName;
  ImageViewer.src = path;
  console.log("hi i am displaying image file: " + imageName);
  console.log("hi again the path is at: " + path);
}

PreviousButton.onclick = function(){
  changeImage("PREVIOUS")
}

NextButton.onclick = function(){
  changeImage("NEXT")
}

RandomButton.onclick = function(){
  changeImage("RANDOM")
}

OriginalButton.onclick = function(){
  OriginalButton.innerText = "No."
}

loadImages();

BackButton.onclick = function() {
  window.location.href = "https://saltrias.github.io"
};