// posts/main.js
// The backbone of the timer

import { charsWritten } from "./posts/numOfChars.js"

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

const startDate = new Date(Date.UTC(2026, 1, 8, 10, 2, 1));

const clockSignSpan = document.getElementById("clockSign") 
const clockDaySpan = document.getElementById("daySpan") 
const clockHourSpan = document.getElementById("hourSpan")
const clockMinuteSpan = document.getElementById("minuteSpan")
const clockSecondSpan = document.getElementById("secondSpan")

function updateTimer() {
    let currentDate = new Date();
    let diff = startDate - currentDate;

    const sign = diff < 0 ? "-" : "+";

    diff = Math.abs(diff)

    const days    = Math.floor(diff / DAY).toString().padStart(2, "0");
    const hours   = Math.floor((diff % DAY) / HOUR).toString().padStart(2, "0");
    const minutes = Math.floor((diff % HOUR) / MINUTE).toString().padStart(2, "0");
    const seconds = Math.floor((diff % MINUTE) / SECOND).toString().padStart(2, "0");

    clockSignSpan.innerHTML = sign
    clockDaySpan.innerHTML = days
    clockHourSpan.innerHTML = hours 
    clockMinuteSpan.innerHTML = minutes
    clockSecondSpan.innerHTML = seconds

}
updateTimer()
setInterval(updateTimer, 1000)
