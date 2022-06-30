"use strict";

const airline = 'TAP Air Portugal';
const plane1 = 'A320';

console.log(airline.toLowerCase());
console.log(airline.toLocaleUpperCase());

// Fix Capitalization in name
const passenger = 'aTefEh'; // Atefeh
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toLocaleUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing Emails
const email = 'hello@gmail.com';
const loginEmail = ' Hello@Gmail.Com \n';

// const lowerEmail = loginEmail.toLocaleLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLocaleLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);


// Replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcment = 'All passengers come to boarding door 23. Boarding door 23';
console.log(announcment.replace('door', 'gate'));
console.log(announcment.replaceAll('door', 'gate'));
console.log(announcment.replace(/door/g, 'gate'));

// Booleans
// const plane2 = 'A320neo';
const plane2 = 'Airbus A320neo';
console.log(plane2.includes('A320'));
console.log(plane2.includes('Boeing'));
console.log(plane2.startsWith('Air'));
console.log(plane2.startsWith('Aib'));

if (plane2.startsWith('Airbus') && plane2.endsWith('neo')) {
    console.log('Part of the Naw Airbus family');
};

// Example
const checkBaggage = function(items) {
    const baggage = items.toLocaleLowerCase();
    if (baggage.includes('knife') || baggage.includes('gun')) {
        console.log('You are NOT allowed on board');
    } else {
        console.log('Wellcome aboard');
    };
};

checkBaggage('Food, Pocket, Knife');
checkBaggage('Socks, camera');
checkBaggage('snacks, gun, water');