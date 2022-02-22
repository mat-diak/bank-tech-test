class Statement {
  constructor() {
    this.history = [];
  }

  getHistory() {
    return this.history;
  }

  saveTransaction(type, amount) {
    this.history.push({
      type: type,
      amount: amount,
    });
  }
}

module.exports = Statement;
