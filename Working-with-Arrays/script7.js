'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);
