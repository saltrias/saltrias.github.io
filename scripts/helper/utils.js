/*
La Utilitias!!!!

[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
*/


export function map(val, sta1, sto1, sta2, sto2) {
  return ((val - sta1) / (sto1 - sta1)) * (sto2 - sta2) + sta2;
}

export function rounded(i, n) {
  // thank god for mdn
  return Number.parseFloat(i).toFixed(n);
}

export function isLeap(y) {
  return y % 4 == 0 && (y % 100 != 0 || y % 400 == 0);
}

export function zellersCongruence(year, month, day) {
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
  return dayList[h];
}

export function getAbbreviatedMonth(val, shr) {
  let monthList = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return monthList[val].substring(0, shr);
}


export function getAbbreviatedDay(val, shr) {
  let dayList = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  return dayList[val].substring(0, shr);
}

export function getWeekNumberFromDate(year, month, day) {
  let leap = isLeap(year);
  let monthDayList = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (leap) { monthDayList[1] = 29}
  let dayOfYear = 0;

  for (let i = 0; i < month - 1; i++) {
    dayOfYear += monthDayList[i];
  }
  return dayOfYear + day;
}
