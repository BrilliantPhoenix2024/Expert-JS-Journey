// Working with BigInt
'use strict';

console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);

console.log(5698545241555455845588445514445n);
console.log(BigInt(569854524155545));

// Operations
console.log(10000n + 10000n);
console.log(5664788544514478558984454n * 10000000n);
// console.log(Math.sqrt(16n));

const huge = 25698765412321456n;
const num = 32;
// console.log(huge * num);
console.log(huge * BigInt(num));

// Exceptions
console.log(20n > 15);
console.log(20n === 20);
console.log(typeof 20n);
console.log(20n == 20);
console.log(20n == '20');

// String Concat.
console.log(huge + ' is really big!!!');

// Divisions
console.log(10n / 3n);
console.log(10 / 3);
console.log(11n / 3n);
console.log(12n / 3n);
