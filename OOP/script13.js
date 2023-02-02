// Encapsulation: Private Class Fields and Methods
'use strict';

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (There is also the static version)

class Account {
  // 1) Public fields (instances)
  locale = navigator.language;

  // 2) Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Protected Property
    this.#pin = pin;
    //   this._movements = [];
    //   this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3) Public methods
  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(value) {
    this.#movements.push(value);
  }

  withdraw(value) {
    this.deposit(-value);
  }

  requestLocal(value) {
    // if (this.#approveLoan(value)) {
    if (this._approveLoan(value)) {
      this.deposit(value);
      console.log(`Loan approved`);
    }
  }

  static helper() {
    console.log(`Helper`);
  }

  // 4) Private methods
  // #approveLoan(value) {
  _approveLoan(value) {
    return true;
  }
}

const acc1 = new Account('Atefeh', 'EUR', 1111);
console.log(acc1);

// acc1._movements.push(250);
// acc1._movements.push(-150);
// acc1.approveLoan(1000);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLocal(2000);
console.log(acc1.getMovements());
console.log(acc1);

// This logs rise an error
// console.log(acc1.#movements);
// console.log(acc1.#pin);
// console.log(acc1.#approveLoan(100));

Account.helper();
