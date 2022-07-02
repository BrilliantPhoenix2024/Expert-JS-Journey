'use strict';

const flight = 'LP689';
const atefeh = {
    name: 'Atefeh Mohammadi',
    passport: 25698745,
};

const checkIn = function (
    flightNum,
    passenger
    ) {
        flightNum = 'UY658';
        passenger.name = 'Ms. ' + passenger.name;

        if (passenger.passport === 25698745) {
            console.log('Check in');
        } else {
            console.log('Wrong passport!');
        }
};

// checkIn(flight, atefeh); 
// console.log(flight);
// console.log(atefeh);

// Is the same doing...
// const flightNum = flight;
// const passenger = atefeh;

const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 100000);
};

newPassport(atefeh);
checkIn(flight, atefeh);