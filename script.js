const randomDrawingEl = document.getElementById("randomDrawing");
const randomButtonEl = document.getElementById("randomizeDrawing");

const DRAWINGS = 24;

function changeImage(id) {
    randomDrawingEl.src = `assets/drawings/${id}.png`
    randomDrawingEl.classList = `${id}`
}

randomButtonEl.addEventListener("click", () => {
    changeImage(Math.floor(Math.random() * DRAWINGS) + 1)
})

changeImage(20);
