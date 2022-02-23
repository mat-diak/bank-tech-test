class StatementFormatter {
  constructor() {
    this.divisor = " || ";
    this.headers = ["date", "credit", "debit", "balance"];
    this.tableHeader = this.headers.join(this.divisor);
  }

  formatFullStatement(data) {
    let rows = [this.tableHeader];
    data.reverse().forEach((transactionData) => {
      rows.push(this.#formatRow(transactionData));
    });
    return rows.join("\n");
  }

  #formatRow(transactionData) {
    const rowElements = [];
    return rowElements
    .concat(
      this.#formatDate(transactionData.date),
      this.#formatTransaction(transactionData.type, transactionData.amount),
      this.#formatAmount(transactionData.balance)
      )
      .join(this.divisor);
    }
    
  #formatDate(date) {
    return date.toISOString().split("T")[0].split("-").reverse().join("/");
  }

  #formatAmount(number) {
    return number.toFixed(2);
  }

  #formatTransaction(type, amount) {
    return type === "credit"
      ? [this.#formatAmount(amount), ""]
      : ["", this.#formatAmount(amount)];
  }
}

module.exports = StatementFormatter;
