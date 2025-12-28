import { zellersCongruence, getAbbreviatedDay, getAbbreviatedMonth } from "../helper/utils.js";

export function loadCalendar() {

  // 1. Define time variables 
  let d = new Date();
  let year = d.getFullYear();
  let month = d.getMonth();
  let day = d.getDay();

  // 2. Define DOM Elements
  let monthYearSpan = document.getElementById("sidebarCalendarMonthYear");
  let dayDiv = document.getElementById("sidebarCalendarDays");

  // 3. Change monthYearSpan to current month and year
  monthYearSpan.innerText = `${getAbbreviatedMonth(month, 3)} ${year}`;

  // 4. Fill day grid with empty values
  for (let i = 0; i < 6; i++) {
    let div = document.createElement("div");
    div.classList.add("sidebarCalendarColumn");
    for (let j = 0; j < 7; j++) {
      let span = document.createElement("span");
      let text = document.createTextNode("");

      span.appendChild(text);
      div.appendChild(span);
    }

    dayDiv.appendChild(div);
  }

  // 2.
  // 3.

}