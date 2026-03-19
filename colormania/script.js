const wrapperEl = document.getElementById("wrapper");

const COLORS = [
    "aliceblue",
    "antiquewhite",
    "aqua",
    "aquamarine",
    "azure",
    "beige",
    "bisque",
    "black",
    "blanchedalmond",
    "blue",
    "blueviolet",
    "brown",
    "burlywood",
    "cadetblue",
    "chartreuse",
    "chocolate",
    "coral",
    "cornflowerblue",
    "cornsilk",
    "crimson",
    "cyan",
    "darkblue",
    "darkcyan",
    "darkgoldenrod",
    "darkgray",
    "darkgreen",
    "darkgrey",
    "darkkhaki",
    "darkmagenta",
    "darkolivegreen",
    "darkorange",
    "darkorchid",
    "darkred",
    "darksalmon",
    "darkseagreen",
    "darkslateblue",
    "darkslategray",
    "darkslategrey",
    "darkturquoise",
    "darkviolet",
    "deeppink",
    "deepskyblue",
    "dimgray",
    "dimgrey",
    "dodgerblue",
    "firebrick",
    "floralwhite",
    "forestgreen",
    "fuchsia",
    "gainsboro",
    "ghostwhite",
    "gold",
    "goldenrod",
    "gray",
    "green",
    "greenyellow",
    "grey",
    "honeydew",
    "hotpink",
    "indianred",
    "indigo",
    "ivory",
    "khaki",
    "lavender",
    "lavenderblush",
    "lawngreen",
    "lemonchiffon",
    "lightblue",
    "lightcoral",
    "lightcyan",
    "lightgoldenrodyellow",
    "lightgray",
    "lightgreen",
    "lightgrey",
    "lightpink",
    "lightsalmon",
    "lightseagreen",
    "lightskyblue",
    "lightslategray",
    "lightslategrey",
    "lightsteelblue",
    "lightyellow",
    "lime",
    "limegreen",
    "linen",
    "magenta",
    "maroon",
    "mediumaquamarine",
    "mediumblue",
    "mediumorchid",
    "mediumpurple",
    "mediumseagreen",
    "mediumslateblue",
    "mediumspringgreen",
    "mediumturquoise",
    "mediumvioletred",
    "midnightblue",
    "mintcream",
    "mistyrose",
    "moccasin",
    "navajowhite",
    "navy",
    "oldlace",
    "olive",
    "olivedrab",
    "orange",
    "orangered",
    "orchid",
    "palegoldenrod",
    "palegreen",
    "paleturquoise",
    "palevioletred",
    "papayawhip",
    "peachpuff",
    "peru",
    "pink",
    "plum",
    "powderblue",
    "purple",
    "rebeccapurple",
    "red",
    "rosybrown",
    "royalblue",
    "saddlebrown",
    "salmon",
    "sandybrown",
    "seagreen",
    "seashell",
    "sienna",
    "silver",
    "skyblue",
    "slateblue",
    "slategray",
    "slategrey",
    "snow",
    "springgreen",
    "steelblue",
    "tan",
    "teal",
    "thistle",
    "tomato",
    "turquoise",
    "violet",
    "wheat",
    "white",
    "whitesmoke",
    "yellow",
    "yellowgreen",
]

COLORS.forEach((color, _) => {
    let colorCard = document.createElement("div")
    colorCard.classList = "color-card"

    let colorImage = document.createElement("div")
    colorImage.classList = "color-image"
    colorCard.appendChild(colorImage);
    colorImage.style.backgroundColor = color


    let colorName = document.createElement("div")
    colorName.classList = "color-name"
    colorCard.appendChild(colorName);
    colorName.innerText = color

    colorName.addEventListener("click", () => {
        navigator.clipboard.writeText(color)       
    })

    let colorComponents = document.createElement("div")
    colorComponents.classList = "components"
    colorCard.appendChild(colorComponents);

    wrapperEl.appendChild(colorCard)

    const rgb = getComputedStyle(colorImage).backgroundColor.match(/\d+/g).slice(0, 3).map(Number);;
    const r = rgb[0]
    const g = rgb[1]
    const b = rgb[2]

    colorImage.addEventListener("click", () => {
        navigator.clipboard.writeText(`rgb(${r}, ${g}, ${b})`)       
    })

    const components = ["red", "green", "blue"];

    components.forEach((col, i) => {
        const component = document.createElement("div")
        component.classList = `component ${col}`

        if (col == "red"){
            component.style.backgroundColor = `rgb(${r}, 0, 0)`;
        } else if (col == "green") {
            component.style.backgroundColor = `rgb(0, ${g}, 0)`;
        } else {
            component.style.backgroundColor = `rgb(0, 0, ${b})`;
        }

        component.addEventListener("click", () => {
            if (col == "red"){
                navigator.clipboard.writeText(r)       
            } else if (col == "green") {
                navigator.clipboard.writeText(g)       
            } else {
                navigator.clipboard.writeText(b)       
            }
        })

        const val = rgb[i]
        const text = document.createElement("span");
        text.innerText = val

        // text.className = val > 170? "black-text" : "white-text";
        text.className = "white-text"

        component.appendChild(text);
        colorComponents.appendChild(component);
    })


})
