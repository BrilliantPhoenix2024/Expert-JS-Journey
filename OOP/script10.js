// Inheritance Between "Classes": Object.create
'use strict';

const PersonProto = {
  clacAge() {
    console.log(2035 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const Atefeh = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const Barf = Object.create(StudentProto);
Barf.init('Barf', 2025, 'Computer Science');
Barf.introduce();
Barf.clacAge();
