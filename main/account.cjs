const Statement = require("./statement.cjs");

class Account {
  constructor(statement = new Statement()) {
    this.balance = 0;
    this.statement = statement;
  }

  getBalance() {
    return this.balance;
  }

  deposit(amount) {
    this.#addToBalance(amount);
    this.#saveToStatement('deposit', amount)
  }

  withdraw(amount) {
    this.#substractFromBalance(amount);
    this.#saveToStatement('withdrawal', amount)
  }

  #addToBalance(amount) {
    this.balance += amount;
  }

  #substractFromBalance(amount) {
    this.balance -= amount;
  }

  #saveToStatement(type, amount) {
    this.statement.saveTransaction({
      type: type,
      amount: amount,
    });
  }
}

module.exports = Account;