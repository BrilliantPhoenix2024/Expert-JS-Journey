'use strict';

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    booking: [],
};

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

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
};

// book.call(eurowings, 23, 'Barf Taghian');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Atefeh Mohammadi');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Atefeh Mohammadi');
bookEW23('Mohammad Taghian');


// Real-World example with Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function() {
    console.log(this);

    this.planes++;
    console.log(this.planes);
};
// lufthansa.buyPlane();

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVat = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(32));

const addTaxRate = function(rate) {
    return function(value) {
        return value + value * rate;
    };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(32));