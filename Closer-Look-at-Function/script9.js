'use strict';

// Example 1
let f;

const g = function() {
    const a = 32;
    f = function() {
        console.log(a * 2);
    };
};

const h = function(){
    const b = 777;
    f = function (){
        console.log(b * 2);
    };
};


g();
f();
console.dir(f);

// Re-assigning f function
h();
f();
console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
    const perGroup = n / 3;

    setTimeout(function () {
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers.`);
    }, wait * 1000);

    console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);