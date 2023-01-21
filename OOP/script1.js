// Constructor Functions and The New Operator
'use strict';

const Person = function (firstName, birthYear) {
  // Instance properties
  //  console.log(this);
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this!
  //   this.calcAge = function () {
  //     console.log(2025 - this.birthYear);
  //   };
};

const Atefeh = new Person('Atefeh', 1990);
console.log(Atefeh);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const Mohammad = new Person('mohammad', 1990);
const Vafa = new Person('Vafa', 2025);
console.log(Mohammad, Vafa);

const Barf = 'Barf';

console.log(Atefeh instanceof Person);
console.log(Barf instanceof Person);
