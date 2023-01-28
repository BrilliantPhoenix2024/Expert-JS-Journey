// Inheritance between "classes": constructor Functions
'use strict';

const Person = function (firstName, birthYear) {
  // Instance properties
  //  console.log(this);
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.clacAge = function () {
  console.log(2035 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  //   this.firstName = firstName;
  //   this.birthYear = birthYear;
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};
const Atefeh = new Student('Atefeh', 1990, 'Computer Engineering');
console.log(Atefeh);
Atefeh.introduce();
Atefeh.clacAge();

console.log(Atefeh.__proto__);
console.log(Atefeh.__proto__.__proto__);

console.log(Atefeh instanceof Student);
console.log(Atefeh instanceof Person);
console.log(Atefeh instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
