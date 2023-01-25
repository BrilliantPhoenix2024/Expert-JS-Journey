// Object.create
'use strict';

const Person = function (firstName, birthYear) {
  // Instance properties
  //  console.log(this);
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const PersonProto = {
  clacAge() {
    console.log(2035 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const Vafa = Object.create(PersonProto);
console.log(Vafa);
Vafa.name = 'Vafa';
Vafa.birthYear = 2026;
Vafa.clacAge();

console.log(Vafa.__proto__ === PersonProto);

const Asal = Object.create(PersonProto);
Asal.init('Asal', 2030);
Asal.clacAge();
