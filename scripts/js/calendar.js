import { zellersCongruence, getAbbreviatedMonth, getAbbreviatedDay } from "../helper/utils.js";

export function initCalendar() {
  let d = new Date();
  let year = d.getFullYear();
  let month = d.getMonth();
  let day = d.getDay();
  let monthAb = getAbbreviatedMonth(month);
  let dayNameList = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  let monthYearElm = document.getElementById("sidebarCalendarMonthYear");
  monthYearElm.innerHTML = `${monthAb} ${year}`;
  let dayGrid = document.getElementById("sidebarCalendarDays");

  // 1. Initialize the Day Grid
  for (let i = 0; i < 8; i++) {
    let div = document.createElement("div");
    div.id = `sidebarCalendarColumn${i}`;
    div.classList.add("sidebarCalendarColumn");

    // some months have like 5 weeks??
    // but its like half weeks so might as well
    for (let j = 0; j < 6; j++) {
      let span = document.createElement("span");
      let text = document.createTextNode("");

      span.id = `sidebarCalendarColumn${i}Row${j}`;

      span.appendChild(text);
      div.appendChild(span);
    }
    dayGrid.appendChild(div);
  }

  // 2. Reserve top row for day names
  for (let i = 0; i < dayNameList.length; i++) {
    let daySpan = document.getElementById(`sidebarCalendarColumn${i + 1}Row0`);
    daySpan.innerHTML = dayNameList[i].substring(0, 1);
    daySpan.classList.add("dayName");

    document.getElementById("sidebarCalendarColumn0Row0").innerHTML = "W#";
  }

  // 3. Make 2D array DayList
  let dayList = [];

  for (let i = 0; i < 5; i++) {
    dayList[i] = [];
    for (let j = 0; j < 7; j++) {
      dayList[i][j] = 0;
    }
  }

  // 4. Fill DayList with days
  // uhhh beep boop please work
}
