// Static Methods
'use strict';

const Person = function (firstName, birthYear) {
  // Instance properties
  //  console.log(this);
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const Atefeh = new Person('Atefeh', 1990);

Person.hey = function () {
  console.log('Hey there');
  console.log(this);
};

Person.hey();

// Classes
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // Instance Methods
  // Method will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  great() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2035 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else console.log(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static Methods
  static hey() {
    console.log('Hey there');
    console.log(this);
  }
}

const Barf = new PersonCl('Barf taghian', 2025);

PersonCl.hey();
