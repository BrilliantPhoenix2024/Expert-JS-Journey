// Inheritance Between "Classes": ES6 Classes
'use strict';

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // Instance Method
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  great() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2035 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else console.log(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static Method
  static hey() {
    console.log('Hey there');
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

// const Barf = new StudentCl('Atefeh Mohammadi', 1990)
const Atefeh = new StudentCl('Atefeh Mohammadi', 1990, 'Computer Engineering');

Atefeh.introduce();
Atefeh.calcAge();
