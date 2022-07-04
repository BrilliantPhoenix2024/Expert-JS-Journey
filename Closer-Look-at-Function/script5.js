'use strict';

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    // book: function() {}
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);

        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
    },
};

lufthansa.book(239, 'Atefeh Mohammadi');
lufthansa.book(698, 'Mohammad Taghian');
console.log(lufthansa);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    booking: [],
};

const book = lufthansa.book;
// Does NOT work
// book(23, 'Barf Taghian');

// CALL Mathod
book.call(eurowings, 32, 'Barf Taghian');
console.log(eurowings);

book.call(lufthansa, 56, 'Pato Taghian');
console.log(lufthansa);

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
};

book.call(swiss, 658, 'Atefeh Mohammadi');
console.log(swiss);

// APPLY Method
const flihgtData = [256, 'Barf Taghian'];
book.apply(swiss, flihgtData);
console.log(swiss);
// Moderm JavaScript
book.call(swiss, ...flihgtData);