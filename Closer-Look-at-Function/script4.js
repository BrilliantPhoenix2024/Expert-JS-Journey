'use strict';

const greet = function (greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`);
    };
};

const greeterHey = greet('Hey');
greeterHey('Atefeh');
greeterHey('Mohammad');
// OR this
greet('Hello')('Atefeh');

const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('Atefeh');