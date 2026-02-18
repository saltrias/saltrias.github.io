// Get search params
const params = new URLSearchParams(window.location.search);

// Check if beta param exists
if (!(params.has("beta"))) {
    window.location.href = "https://saltrias.github.io/stopwatch"; 
} 
