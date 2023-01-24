// Setters and Getters
'use strict';

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
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
}

const Barf = new PersonCl('Barf taghian', 2025);
console.log(`Age ${Barf.firstName}: ${Barf.age}`);

const Vafa1 = new PersonCl('Vafa1', 2030);
const Vafa2 = new PersonCl('Vafa2 taghian', 2030);
console.log(Vafa2);

const account = {
  owner: 'Atefeh',
  movements: [200, 530, 120, 1000],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);
