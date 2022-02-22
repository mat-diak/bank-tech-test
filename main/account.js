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
    this.#validateInput(amount)
    this.#addToBalance(amount);
    this.statement.saveTransaction("credit", amount, this.balance);
  }

  withdraw(amount) {
    this.#validateInput(amount)
    if (this.balance >= amount) {
        this.#substractFromBalance(amount);
        this.statement.saveTransaction("debit", amount, this.balance);
    } else {
      throw 'Insufficient balance'
    }
  }

  #validateInput(input) {
    if (!Number.isInteger(input) || input < 1) { throw 'Invalid input' }
  }

  #addToBalance(amount) {
    this.balance += amount;
  }

  #substractFromBalance(amount) {
    this.balance -= amount;
  }
}

module.exports = Account;
