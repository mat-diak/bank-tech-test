const Statement = require("./statement.js");

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
    this.statement.saveTransaction("deposit", amount);
  }

  withdraw(amount) {
    this.#substractFromBalance(amount);
    this.statement.saveTransaction("withdrawal", amount);
  }

  #addToBalance(amount) {
    this.balance += amount;
  }

  #substractFromBalance(amount) {
    this.balance -= amount;
  }
}

module.exports = Account;
