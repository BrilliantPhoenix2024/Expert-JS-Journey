// Google : operator precedence mdn

const now = 2037;
const ageAtefeh = now - 1990;
const agesarah = now - 2001;

console.log(now - 1990 > now - 2001);

// Mathematic, Executed left to right.
console.log(26 - 9 - 5);

// Assignment , Excuted right to left.
let x, y;
x = y = 26 - 9 - 5; // x = y = 10, x = 10
console.log(x, y);

// Grouping, Parentheses executed first.
const averageAge = (ageAtefeh + agesarah) / 2;
console.log(averageAge);
console.log(ageAtefeh, agesarah);