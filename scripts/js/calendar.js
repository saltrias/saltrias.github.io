function isLeap(y) {
  return y % 4 == 0 && (y % 100 != 0 || y % 400 == 0);
}

function zellersCongruence(year, month, day) {
  // I discovered Date.getDay() after I wrote this function
  // Well whatever i guess

  let fl = Math.floor;

  const dayList = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  if (month <= 2) {
    year--;
    month += 12;
  }

  let q = day;
  let m = month;
  let K = year % 100;
  let J = fl(year / 100);

  let h = (q + fl((13 * (m + 1)) / 5) + K + fl(K / 4) + fl(J / 4) - 2 * J) % 7;
  // Z Sa Su Mo Tu We Th Fr
  // I Mo Tu We Th Fr Sa Su
  return ((h + 5) % 7) + 1;
}

function getAbbreviatedMonth(val, shr) {
  let monthList = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return monthList[val].substring(0, shr);
}

function getAbbreviatedDay(val, shr) {
  let dayList = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  return dayList[val].substring(0, shr);
}

export function getLastDayOfMonth(y, m) {
  let monthDayList = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (isLeap(y)) {
    monthDayList[1] = 29;
  }
  return monthDayList[m];
}

// idk i told chatgpt to write this function
// dont blame me blame chatgpt
export function getWeekNumberFromDate(year, month, day) {
  let leap = isLeap(year);
  let monthDayList = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (leap) monthDayList[1] = 29;

  let dayOfYear = 0;
  for (let i = 0; i < month - 1; i++) {
    dayOfYear += monthDayList[i];
  }
  dayOfYear += day;
  let D0 = dayOfYear - 1;

  let weekdayJan1 = ((zellersCongruence(year, 1, 1) + 6) % 7) + 1;
  let offset = (8 - weekdayJan1) % 7;

  return Math.floor((D0 + offset) / 7) + 1;
}

// I may or may not use this
// But it's good to have
/* export function repeat(fn, n) {
  for (let i = 0; i < n; i++) {
    fn();
  }
} */

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
  for (let i = 0; i < 7; i++) {
    let div = document.createElement("div");
    div.id = `sidebarCalendarDayRow${i}`;
    div.classList.add("sidebarCalendarDayRow");
    for (let j = 0; j < 6; j++) {
      let span = document.createElement("span");
      let text = document.createTextNode("10");
      span.id = `sidebarCalendarDayX${i}Y${j}`;
      span.appendChild(text);
      div.appendChild(span);
    }

    dayDiv.appendChild(div);
  }

  // 5. Reserve first row for day names

  for (let i = 0; i < 7; i++) {
    let dayName = document.getElementById(`sidebarCalendarDayX${i}Y0`);
    dayName.classList.add("dayName");
    dayName.innerHTML = getAbbreviatedDay(i, 1);
  }

  // 6. Make array from 1 to last date of month
  let monthDaysList = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (isLeap(year)) {
    monthDaysList[1] = 29;
  }
  let daysInCurrentMonth = monthDaysList[month];
  let dayMatrix = [];
  for (let d = daysInCurrentMonth; d > 0; d--) {
    // This is a stupid implementation
    dayMatrix.unshift(d);
  }

  // 7. Align the first day of the month with its correct weekday
  let frontShift = zellersCongruence(year, month + 1, 1) - 1;
  let backShift = 7 - zellersCongruence(year, month + 1, getLastDayOfMonth(year, month));

  for (let i = 0; i < frontShift; i++) {
    dayMatrix.unshift(0);
  }

  for (let i = 0; i < backShift; i++) {
    dayMatrix.push(0);
  }

  // 8. Make dayMatrix an actual matrix
  let tmp = dayMatrix;
  dayMatrix = [];
  for (let i = 0; i < 5; i++) {
    let list = tmp.slice(i * 7, i * 7 + 7);
    dayMatrix.push(list);
  }

  // 9. Display dayMatrix to the spans

  for (let i = 0; i < dayMatrix.length; i++) {
    let list = dayMatrix[i];

    for (let j = 0; j < list.length; j++) {
      let el = list[j];
      let elSpan = document.getElementById(`sidebarCalendarDayX${j}Y${i + 1}`);
      elSpan.innerText = el;
      if (el == 0) {
        elSpan.classList.add("hidden");
      }
    }
  }
}
