class StatementFormatter {
  
  constructor() {
    this.divisor = " || "
    this.headers = ['date', 'credit', 'debit', 'balance']
    this.tableHeader = this.headers.join(this.divisor)
  }
  
  formatFullStatement(data) {
    let output = [this.tableHeader];
    data.reverse().forEach((transactionData) => {
      output.push(this.#formatRow(transactionData));
    });
    return output.join("\n");
  }

  #formatDate(date) {
    return date.toISOString()
               .split("T")[0]
               .split("-")
               .reverse()
               .join("/");
  }

  #formatNumber(number) {
    return number.toFixed(2);
  }

  #formatRow(transactionData) {
    const rowElements = [];
    rowElements.push(
      this.#formatDate(transactionData.date),
      this.#formatCreditCol(transactionData.type, transactionData.amount),
      this.#formatDebitCol(transactionData.type, transactionData.amount),
      this.#formatNumber(transactionData.balance)
    );
    return rowElements.join(this.divisor);
  }

  #formatCreditCol(type, amount) {
    return type === "credit" ? this.#formatNumber(amount) : "";
  }

  #formatDebitCol(type, amount) {
    return type === "debit" ? this.#formatNumber(amount) : "";
  }
}

module.exports = StatementFormatter;
