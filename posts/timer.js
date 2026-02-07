// posts/main.js
// The backbone of the timer

import { charsWritten } from "./posts/numOfChars.js"
import { postsEntries } from "./posts/postsEntries.js"

const startDate = new Date(Date.UTC(2026, 1, 7, 0, 0, 0));

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

const TIME_PER_CHARACTER = 5 * MINUTE

const clockSignSpan = document.getElementById("clockSign") 
const clockDaySpan = document.getElementById("daySpan") 
const clockHourSpan = document.getElementById("hourSpan")
const clockMinuteSpan = document.getElementById("minuteSpan")
const clockSecondSpan = document.getElementById("secondSpan")

const postArea = document.getElementById("postArea")

function updateTimer() {
    let currentDate = new Date();
    let diff = 14 * DAY;
    diff += startDate - currentDate + (charsWritten * TIME_PER_CHARACTER);

    const sign = diff >= 0 ? "+" : "-"

    // apparently it will fuck up if diff is a negative.
    diff = Math.abs(diff)

    const days    = Math.floor(diff / DAY).toString().padStart(2, "0");
    const hours   = Math.floor((diff % DAY) / HOUR).toString().padStart(2, "0");
    const minutes = Math.floor((diff % HOUR) / MINUTE).toString().padStart(2, "0");
    const seconds = Math.floor((diff % MINUTE) / SECOND).toString().padStart(2, "0");

    clockSignSpan.textContent = sign;
    clockDaySpan.textContent = days;
    clockHourSpan.textContent = hours ;
    clockMinuteSpan.textContent = minutes;
    clockSecondSpan.textContent = seconds;
}

function loadPost(filename){
    fetch(`./posts/html/${filename}.html`)
        .then( response => response.text() ) // do something idk
        .then( html => postArea.innerHTML = html)
        .catch(err => console.error(err))
}

function initializeBlogPosts(blogs){
    // todo: Add virtualization in case of heavy/big files
    const postsListDiv = document.getElementById("sidebarTextScrollArea")
    blogs.forEach( f => {
        f = f.slice(0, -3);
        const span = document.createElement("span")
        span.append(document.createTextNode(f))
        span.addEventListener("click", () => {
            loadPost(f)
        });
        postsListDiv.appendChild(span)
    })
}

updateTimer();
initializeBlogPosts(postsEntries);
loadPost("Intro")
setInterval(updateTimer, 1000);
