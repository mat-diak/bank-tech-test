const Statement = require("./statement.js");
const Validator = require("./validator.js");

class Account {
  constructor(statement = new Statement()) {
    this.balance = 0;
    this.statement = statement;
  }

  getBalance() {
    return this.balance;
  }

  deposit(amount) {
    Validator.isValidInput(amount);
    this.#addToBalance(amount);
    this.statement.saveTransaction("credit", amount, this.balance);
  }

  withdraw(amount) {
    Validator.isValidInput(amount);
    Validator.hasSufficientFunds(this.balance, amount);
    this.#substractFromBalance(amount);
    this.statement.saveTransaction("debit", amount, this.balance);
  }

  #addToBalance(amount) {
    this.balance += amount;
  }

  #substractFromBalance(amount) {
    this.balance -= amount;
  }
}

module.exports = Account;
