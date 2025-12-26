import { zellersCongruence, getAbbreviatedMonth } from "../helper/utils.js";

export function initCalendar() {
  let d = new Date();
  let year = d.getFullYear();
  let month = d.getMonth();
  let monthAb = getAbbreviatedMonth(month);
  let dayArray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  let monthYearElm = document.getElementById("sidebarCalendarMonthYear");
  monthYearElm.innerHTML = `${monthAb} ${year}`
  let dayGrid = document.getElementById("sidebarCalendarDays");

  // Initialize the Day Grid
  for (let i = 0; i < 7; i++) {
    let div = document.createElement("div");
    div.id = `sidebarCalendar${dayArray[i]}Column`
    div.classList.add("sidebarCalendarColumn")

    for (let j = 0; j < 4; j++) {
      let span = document.createElement("span");
      let text = document.createTextNode("9");

      span.appendChild(text);
      div.appendChild(span);
    }
    dayGrid.appendChild(div);
  }
}
