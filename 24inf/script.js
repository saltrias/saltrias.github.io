const SVG = document.getElementById("canvas");

const LINE = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "path"
);

let speed = document.getElementById("speed")

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

SVG.appendChild(LINE)

let x = 250;
let y = 250;

let d = `M 250 250 `
let line_style = "stroke:white;fill:none;stroke-width:2;"

LINE.setAttribute("style", line_style)

function step() {
    let decision = Math.random() < 0.5 ? "h" : "v";
    let sign = Math.random() < 0.5 ? -1 : 1;
    let value = Math.floor(Math.random() * 3) + 7;
    d += `${decision} ${sign*value} `

    if (decision == "h") {
        x += sign*value
    } else {
        y += sign*value
    }
        

    LINE.setAttribute("d", `${d}`)
    
}

async function draw() {
    while (!(x < 0 || x > 500 || y < 0 || y > 500)) {
        step()
        await sleep(Number(speed.value))
    }
}

document.getElementById("redraw").addEventListener("click", () => {
    x = 250;
    y = 250;
    d = "M 250 250 "
    draw()
})

draw()
