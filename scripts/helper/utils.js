/*
La Utilitias!!!!

[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
*/

let dayList = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

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

export function getAbbreviatedMonth(val) {
  val++;
  switch (val) {
    case 1:
      return "Jan";
    case 2:
      return "Feb";
    case 3:
      return "Mar";
    case 4:
      return "Apr";
    case 5:
      return "May";
    case 6:
      return "Jun";
    case 7:
      return "Jul";
    case 8:
      return "Aug";
    case 9:
      return "Sep";
    case 10:
      return "Oct";
    case 11:
      return "Nov";
    case 12:
      return "Dec";

    default:
      console.warn("wtf this month invalid");
      return "???";
  }
}

// export function getWeekNumberFromDate(year, month, day) {
//   let leap = isLeap(year);
//   let monthDayList = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//   if (leap) { monthDayList[1] = 29}
//   let dayOfYear = 0;

//   for (let i = 0; i < month - 1; i++) {
//     dayOfYear += monthDayList[i];
//   }
//   return dayOfYear + day;
// }