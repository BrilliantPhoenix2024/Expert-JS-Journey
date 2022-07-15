// Operations with Dates
'use strict';

const future = new Date(2025, 10, 19, 15, 32);
console.log(Number(+future));

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(
  new Date(2022, 3, 4),
  new Date(2025, 3, 14)
);
console.log(days1);
