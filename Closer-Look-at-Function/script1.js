'use strict';

const bookings = [];

const createBooking = function (
    flightNum,
    numPassengers = 1,
    price = 199 * numPassengers
    ) {
    
    // ES5
    // numPassengers = numPassengers || 1;
    // price = price || 199;

    const booking = {
        flightNum,
        numPassengers,
        price,
    }
    console.log(booking);
    bookings.push(booking);
};

createBooking('Lh123');
createBooking('KL569', 1, 800);
createBooking('KL569', 5);

createBooking('PF658', undefined, 1000);