'use strict';

console.log(23 === 23.0);

// Base 10 -> 0 to 9 => 1/10 = 0.1, 3/10 = 3.33333
// Binary base 2 -> 0 1
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

// Conversion
console.log(Number('32'));
console.log(+'32');

// Parsing
console.log(Number.parseInt('30px', 10));
console.log(Number.parseInt('30px', 2));
console.log(Number.parseInt('e32', 10));
console.log(Number.parseInt('e32', 2));

console.log(Number.parseFloat('  2.5rem '));
console.log(Number.parseInt('    2.5rem   '));

// console.log(parseFloat('    2.5rem   '));

// Check if value is NaN
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20X'));
console.log(Number.isNaN(32 / 0));

// Checking if value is number
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20X'));
console.log(Number.isFinite(20 / 0));

console.log(Number.isInteger(32));
console.log(Number.isInteger(32.0));
console.log(Number.isInteger(32 / 0));
