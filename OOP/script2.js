// Prototypes
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
const Mohammad = new Person('mohammad', 1990);
const Vafa = new Person('Vafa', 2025);
console.log(Mohammad, Vafa);

console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2025 - this.birthYear);
};

Atefeh.calcAge();
Mohammad.calcAge();
Vafa.calcAge();

console.log(Atefeh.__proto__);
console.log(Atefeh.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(Atefeh));
console.log(Person.prototype.isPrototypeOf(Mohammad));
console.log(Person.prototype.isPrototypeOf(Person));

// .prototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(Atefeh.species, Mohammad.species);

console.log(Atefeh.hasOwnProperty('firstName'));
console.log(Atefeh.hasOwnProperty('species'));
