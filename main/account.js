export class Account {
  constructor() {
    this.balance = 0;
  }

  getBalance() {
    return this.balance;
  }

  deposit(amount) {
    this.#addToBalance(amount)
  }

  withdraw(amount) {
    this.#substractFromBalance(amount)
  }

  #addToBalance(amount) {
    this.balance += amount
  }

  #substractFromBalance(amount) {
    this.balance -= amount
  }
}
