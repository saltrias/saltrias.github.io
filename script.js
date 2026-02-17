/*
const weekSpan = document.getElementById("weekSpan");
const daySpan = document.getElementById("daySpan");
const hourSpan = document.getElementById("hourSpan");
const minuteSpan = document.getElementById("minuteSpan");
const secondSpan = document.getElementById("secondSpan");
*/

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const WEEK = 7 * DAY;

const startTime = new Date(Date.UTC(2026, 1, 17, 9, 0, 0));

function changeText( ElementId, text ) {
    document.getElementById(ElementId).innerText = text;
}

function updateClock() {
    let currentTime = new Date();

    let diff = currentTime - startTime;

    let fl = Math.floor
    let ab = Math.abs

    const diffWeeks = ab( fl( diff / WEEK ) );
    const diffDays = ab( fl( ( diff % WEEK ) / DAY) );
    const diffHours = ab( fl( (diff % DAY ) / HOUR) );
    const diffMinutes = ab( fl( ( diff % HOUR ) / MINUTE) );
    const diffSeconds = ab( fl( ( diff % MINUTE ) / SECOND) );

    changeText("weekSpan", `${diffWeeks}w`);
    changeText("daySpan", `${diffDays}d`);
    changeText("hourSpan", `${diffHours}h`);
    changeText("minuteSpan", `${diffMinutes}m`);
    changeText("secondSpan", `${diffSeconds}s`);
}

updateClock();

setInterval(updateClock, 1000);
