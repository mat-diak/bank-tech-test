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
    this.#validateSufficientFunds(amount)
    this.#substractFromBalance(amount);
    this.statement.saveTransaction("debit", amount, this.balance);
  }

  #validateInput(input) {
    if (!Number.isInteger(input) || input < 1) { throw 'Invalid input' }
  }

  #validateSufficientFunds(amount) {
    if (amount > this.balance) { throw 'Insufficient balance' }
  }

  #addToBalance(amount) {
    this.balance += amount;
  }

  #substractFromBalance(amount) {
    this.balance -= amount;
  }
}

module.exports = Account;
