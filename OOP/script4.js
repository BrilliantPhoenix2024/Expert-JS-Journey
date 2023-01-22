// ES6 Classes
'use strict';

// Class Expression
// const PersonCl = class {}

// Class Declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  // Method will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  great() {
    console.log(`Hey ${this.firstName}`);
  }
}

const Barf = new PersonCl('Barf', 2025);
console.log(Barf);
Barf.calcAge();

console.log(Barf.__proto__ === PersonCl.prototype);

// PersonCl.prototype.great = function () {
//     console.log(`Hey ${this.firstName}`);
// }
Barf.great();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizes
// 3. Classes are executed in strict mode
