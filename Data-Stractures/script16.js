'use strict';

// Split and Join Method
console.log('a+very+nice+string'.split('+'));
console.log('Atefeh Mohammadi Dinani'.split(' '));

const [firstName, lastName] = 'Atefeh Mohammadi'.split(' ');

const newName = ['Ms.', firstName, lastName.toLocaleUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function(name) {
    const names = name.split(' ');
    const namesUpper = [];

    for (const n of names) {
        // namesUpper.push(n[0].toLocaleUpperCase() + n.slice[1]);
        namesUpper.push(n.replace(n[0], n[0].toLocaleUpperCase()));
    }

    console.log(namesUpper.join(' '));
};

capitalizeName('asal taghian dinani');
capitalizeName('barf taghian dinani');
capitalizeName('atefeh mohammadi dinani');

// Padding String
const message1 = 'Go to gate 32';
console.log(message1.padStart(25, '-'));
console.log(message1.padEnd(25, '-'));
console.log(message1.padStart(24, '-').padEnd(35, '-'));


// Real-World Example
const maskCreditCard = function(number) {
    const str = number + '';
    const last4Char = str.slice(-4);
    return last4Char.padStart(str.length, '*');
};

console.log(maskCreditCard('59876541236589'));
console.log(maskCreditCard(45896896));

// Repeat Method
const message2 = 'Bad weather... All departures Delayed... '
console.log(message2.repeat(5));

const planesInline = function (n) {
    console.log(`There are ${n} planes in line ${'*'.repeat(n)}`);
}

planesInline(5);
planesInline(22);
planesInline(3);