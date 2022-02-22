const StatementFormatter = require("./StatementFormatter");

class Statement {
  constructor(statement = new StatementFormatter()) {
    this.transactionHistory = [];
    this.statementFormatter = statement;
  }

  getTransactionHistory() {
    return this.transactionHistory
  }

  print() {
    console.log(
      this.statementFormatter.formatFullStatement(this.transactionHistory)
    );
  }

  saveTransaction(type, amount, balance) {
    this.transactionHistory.push({
      date: new Date(),
      type: type,
      amount: amount,
      balance: balance,
    });
  }
}

module.exports = Statement;
