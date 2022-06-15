// Math Operator.

const now = 2037;
const ageAtefeh = now - 1990;
const agesarah = now - 2001;

console.log(ageAtefeh);
console.log(agesarah);
console.log(ageAtefeh, agesarah);

// 2 ** 3 means 2 to the power of 3 = 2 * 2* 2
console.log(ageAtefeh * 2, ageAtefeh / 2, 2 ** 3);

// concatenate diffrent Strings.
const firstName = 'Atefeh';
const lastName  = 'Mohammadi';
console.log(firstName + lastName);
console.log(firstName + ' ' + lastName);

// Assignment Operators.
let x = 10 + 5;
console.log(x);
x += 10; // x = x + 10;
console.log(x);
x *= 4;
console.log(x);
x++; // x = x + 1;
console.log(x);
x--; // x = x - 1;
console.log(x);

// Comparison Operators.
console.log(ageAtefeh > agesarah); // >, <, >=, <=
console.log(agesarah >= 10);

const isFullAge = ageAtefeh <= 100;
console.log(isFullAge);

// First math Operators done then comparison Operators.
console.log(now - 1990 > now - 2001);