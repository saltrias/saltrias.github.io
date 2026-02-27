const imageCount = 18;

const galleryEl = document.getElementById("gallery");

for ( let i = imageCount; i > 0; i-- ) {
    let img = document.createElement("img");
    img.src = `images/${i}.png`;
    galleryEl.appendChild(img);
}
