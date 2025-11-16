// hi

let BackButton = document.getElementById("BackButton");
let PreviousButton = document.getElementById("PreviousButton");
let OriginalButton = document.getElementById("OriginalButton");
let NextButton = document.getElementById("NextButton");
let RandomButton = document.getElementById("RandomButton");

let imageList = [];
let currentIndex = 0;
let Image = document.getElementById("image");

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


// BackButton.onclick = function() {
//   window.history.back();
// };