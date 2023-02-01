// Encapsulation: Protected Properties and Methods
'use strict';

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;

    // Protected Property
    this._pin = pin;
    this._movements = [];

    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public interface
  getMovements() {
    return this._movements;
  }

  deposit(value) {
    this._movements.push(value);
  }

  withdraw(value) {
    this.deposit(-value);
  }

  _approveLoan(value) {
    return true;
  }

  requestLocal(value) {
    if (this._approveLoan(value)) {
      this.deposit(value);
      console.log(`Loan approved`);
    }
  }
}

const acc1 = new Account('Atefeh', 'EUR', 1111);
console.log(acc1);

// acc1._movements.push(250);
// acc1._movements.push(-150);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLocal(2000);
acc1.approveLoan(1000);
console.log(acc1.getMovements());

console.log(acc1);
console.log(acc1.pin);
