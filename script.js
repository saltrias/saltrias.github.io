// Get search params
const params = new URLSearchParams(window.location.search);

// Check if beta param exists
if (!(params.has("beta"))) {
    window.location.href = "stopwatch/"; 
} 

const packetEl = document.getElementById("packet-text");

async function loadChars() {
    const res = await fetch("random.txt");
    const randomChars = await res.text();
    packetEl.innerText = randomChars
}

loadChars()
