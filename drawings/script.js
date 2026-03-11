const gallery = document.getElementById("gallery");
let images = 24;

for (let i = images; i > 0; i--) {
    let img = document.createElement("img")
    img.src = `images/${i}.png`;
    gallery.appendChild(img);
}
