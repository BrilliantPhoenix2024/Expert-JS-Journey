'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);

// accumulator -> SNOWBALL
// const balance1 = movements.reduce(function(accumulator, current, i, arr) {
//     console.log(`Itration ${i}: ${accumulator}`);
//     return accumulator + current;
// }, 0);
// console.log(balance1);

const balance1 = movements.reduce(
  (accumulator, current) => accumulator + current,
  0
);
console.log(balance1);

// if the person has some money(like 100) at the time they open their account at the begining
const balance2 = movements.reduce(function (accumulator, current, i, arr) {
  console.log(`Itration ${i}: ${accumulator}`);
  return accumulator + current;
}, 100);
console.log(balance2);

let balance3 = 0;
for (const mov of movements) balance3 += mov;
console.log(balance3);
