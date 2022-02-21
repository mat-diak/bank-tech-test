export class Statement {
  constructor() {
    this.history = [];
  }

  getHistory() {
    return this.history;
  }

  saveTransaction(transactionData) {
    this.history.push(transactionData);
  }
}
