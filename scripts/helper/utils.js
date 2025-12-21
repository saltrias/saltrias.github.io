/*
La Utilitias!!!!
*/

export function map(val, sta1, sto1, sta2, sto2) {
  return (val - sta1) / (sto1 - sta1) * (sto2 - sta2) + sta2
}

export function rounded(i, n){
  // thank god for mdn
  return Number.parseFloat(i).toFixed(n);
}


export function zellersCongruence(year, month, day, mode){
  let fl = Math.floor;
  const dayList = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

  if (month <= 2) { year--; month+= 12; }

  let q = day;
  let m = month;
  let K = year % 100;
  let J = fl(year / 100);

  let h = (q + fl(13 * (m+1)/5) + K + fl(K/4) + fl(J/4) - 2*J) % 7
  return dayList[h];
}

export function getAbbreviatedDateTerm(type, val){
  if (type == "MONTH") {
    val = "".substring(0, 2)
  }
}