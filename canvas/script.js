const paper = document.getElementById("paper");

let paperW = Number(paper.getAttribute("width"));
let paperH = Number(paper.getAttribute("height"));
let zoomFactor = 0.5;

let viewBoxX = 0;
let viewBoxY = 0;
let viewBoxW = paperW / zoomFactor;
let viewBoxH = paperH / zoomFactor;

paper.setAttribute("viewBox", `${viewBoxX} ${viewBoxY} ${viewBoxW} ${viewBoxH}`);


document.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();

    switch (key){
        case "h":
            console.log("left")
            viewBoxX += 200*zoomFactor;
            break;
        case "j":
            console.log("down")
            viewBoxY -= 200*zoomFactor;
            break;
        case "k":
            console.log("up")
            viewBoxY += 200*zoomFactor;
            break;
        case "l":
            console.log("right")
            viewBoxX -= 200*zoomFactor;
            break;
    }


    viewBoxW = paperW / zoomFactor;
    viewBoxH = paperH / zoomFactor;

    paper.setAttribute("viewBox", `${viewBoxX} ${viewBoxY} ${viewBoxW} ${viewBoxH}`);

})

