const firstName = 'Atefeh';
const job = 'developer';
const birthYear = 1990;
const year = 2037;

const atefeh = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!'; 
console.log(atefeh);

// Template literals
const atefehNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(atefehNew)

console.log('--------------------------')

console.log(`I'm a student now and learning JS.`)

console.log('--------------------------')

// Creating new line
console.log('String with \n\
multiple \n\
lines.');

console.log('--------------------------')

// Useing backtick instead of \n\ for creating NEW line.
console.log(`String with
multiple
lines.`);