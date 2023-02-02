// Chaning Methods
'use strict';

class Account {
  locale = navigator.language;
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    console.log(`Thanks for opening an account, ${owner}`);
  }

  getMovements() {
    return this.#movements;
  }

  deposit(value) {
    this.#movements.push(value);
    return this;
  }

  withdraw(value) {
    this.deposit(-value);
    return this;
  }

  requestLocal(value) {
    if (this._approveLoan(value)) {
      this.deposit(value);
      console.log(`Loan approved`);
      return this;
    }
  }

  static helper() {
    console.log(`Helper`);
  }

  _approveLoan(value) {
    return true;
  }
}

const acc1 = new Account('Atefeh', 'EUR', 1111);
console.log(acc1);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLocal(2000);
console.log(acc1.getMovements());
console.log(acc1);
Account.helper();

acc1.deposit(300).deposit(5000).withdraw(35).requestLocal(25000).withdraw(4000);
console.log(acc1.getMovements());
