from math import *

def zellersCongruence(year, month, day):
  dayList = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

  if month <= 2:
    year -= 1
    month += 12
  q = day
  m = month
  K = year % 100
  J = year // 100

  h = ( q + floor(13 * (m + 1) / 5) + K + floor(K/4) + floor(J/4) - 2*J) % 7
  print(dayList[h])

inp = zellersCongruence(2026, 1, 2)
print(inp)