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