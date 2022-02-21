export class Statement {
  constructor() {
    //statement will store the transactions
    this.history = [];
  }

  getHistory() {
    return this.history;
  }

  saveTransaction(transactionData) {
    this.history.push(transactionData);
  }
}

// save transaction
// takes amount & type
// getTransactionHistory
// returns transaction history
