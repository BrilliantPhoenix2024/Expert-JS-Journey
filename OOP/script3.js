// Prototypal Inheritance on Built-in Objacts
'use strict';

const Person = function (firstName, birthYear) {
  // Instance properties
  //  console.log(this);
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2025 - this.birthYear);
};

const Atefeh = new Person('Atefeh', 1990);
const Mohammad = new Person('mohammad', 1990);
const Vafa = new Person('Vafa', 2025);
console.log(Mohammad, Vafa);

console.log(Atefeh.__proto__);
// Object.prototype (top of prototype chain)
console.log(Atefeh.__proto__.__proto__);
console.log(Atefeh.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 5, 9, 9, 3]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.log(h1);
console.dir(x => x + 1);
