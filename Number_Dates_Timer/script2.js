'use strict';

console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(Math.max(5, 18, 32, 11, 2));
console.log(Math.max(5, 18, '32', 11, 2));
console.log(Math.max(5, 18, '32px', 11, 2));

console.log(Math.min(5, 18, 32, 11, 2));

console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
// 0 ... 1 -> 0 ...(max - min) -> min ...max
console.log(randomInt(10, 20));

// Rounding Integers
console.log(Math.round(32.3));
console.log(Math.round(32.9));

console.log(Math.ceil(32.3));
console.log(Math.ceil(32.9));

console.log(Math.floor(32.3));
console.log(Math.floor(32.9));
console.log(Math.floor('32.9'));

console.log(Math.trunc(32.5));

console.log(Math.trunc(-32.5));
console.log(Math.floor(-32.5));

// Rounding decimals
console.log((2.7).toFixed(0)); // return string
console.log((2.7).toFixed(3));
console.log((2.345).toFixed(2));
console.log(+(2.345).toFixed(2)); // return number
