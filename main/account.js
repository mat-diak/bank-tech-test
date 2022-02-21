import { Statement } from "./statement";

export class Account {
  constructor(statement = new Statement()) {
    this.balance = 0;
    this.statement = statement;
  }

  getBalance() {
    return this.balance;
  }

  deposit(amount) {
    this.#addToBalance(amount);
    this.statement.saveTransaction({
      type: "deposit",
      amount: amount,
    });
  }

  withdraw(amount) {
    this.#substractFromBalance(amount);
    this.statement.saveTransaction({
      type: "withdrawal",
      amount: amount,
    });
  }

  #addToBalance(amount) {
    this.balance += amount;
  }

  #substractFromBalance(amount) {
    this.balance -= amount;
  }
}
